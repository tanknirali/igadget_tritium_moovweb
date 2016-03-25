
# Rewrite meta redirects
@func XMLNode.rewrite_meta_refresh() {
  $("/html/head/meta") {
    %refresh_tag = fetch("@http-equiv")
    match(normalize(%refresh_tag)) {
      with(/refresh/i) {
        attribute("content") {
          value() {
            replace(/(.*?;)(URL=)?(.*)/i) {
              %timeout = $1
              %prefix = $2
              %url = $3
              %url {
                rewrite_link()
              }
              set(%timeout + %prefix + %url)
            }
          }
        }
      }
    }
  }
}

# Rewrite items
@func XMLNode.rewrite_links() {
  $rewriter_url = "false"
  $("./body") {
    # Rewrite links
    $(".//a") {
      attribute("href") {
        value() {
          rewrite_link()
        }
      }
    }
    $("/html/head/base[@href]") {
      $rewriter_url = fetch("./@href")
      $rewriter_url {
        replace(/.*(\/\/[\w\.]+\/).*/, "\\1")
      }
      attribute("href") {
        value() {
          rewrite_link()
        }
      }
    }
    # Rewrite form actions
    $(".//form") {
      attribute("action") {
        value() {
          rewrite_link()
        }
      }
    }
  }
  rewrite_meta_refresh()
}

@func XMLNode.rewrite_aspnet_scripts() {
  $(".//script[contains(@src, 'ScriptResource.axd?') or contains(@src, 'WebResource.axd?')]") {
    attribute("src") {
      value() {
        rewrite("link")
      }
    }
  }
}

####################
### Site Functions
####################

# dollar signs in image srcs get converted to %24 by nokogiri so convert them back
@func Text.restore_dollar_sign() {
  capture(/ src="(.*?)"/) {
    %1 {
      replace("%24", "$")
    }
    set(" src=\"" + %1 + "\"")
  }
}

@func Text.protect_xmlns() {
  replace(/\<(\/)?(\w+)\:(\w+)(\>?)/, "<$1$2_mwns_$3$4")
}

@func Text.restore_xmlns() {
  replace(/\<(\/?)(\w+)_mwns_(\w+)(\>?)/, "<$1$2:$3$4")
}

# A compendium of ways to "dump" tables
#
#
# EXAMPLE::
#
# table_dump(".//table") {
#   $("./div[@class='some-class']") {
#     add_class("mw-more-scopes")
#   }
# }
#
#
@func XMLNode.table_dump(Text %xpath) {
  $(%xpath) {
    name("div")
    add_class("mw-was-table")

    $(".//table | .//tr | .//td | .//th | .//thead | .//tfoot | .//tbody | .//col | .//colgroup | .//caption") {
      %i = index()
      %n = name()
      name("div")
      attributes(data-mw-id: concat("mw-dump-", %n, %i), width: "")
      add_class(concat("mw-was-", %n))
    }

    yield()
  }
}



# Remove Styles Functions
@func XMLNode.remove_external_styles() {
  remove(".//link[@rel='stylesheet'][not(@data-mw-keep)]")
}
@func XMLNode.remove_internal_styles() {
  remove(".//style")
}
@func XMLNode.remove_inline_styles() {
  remove(".//@style|.//@width|.//@height")
}
@func XMLNode.remove_all_styles() {
  remove(".//link[@rel='stylesheet'][not(@data-mw-keep)]|.//style[not(@data-mw-keep)]")
}

# Remove Scripts
@func XMLNode.remove_external_scripts() {
  remove(".//script[@src]")
}
@func XMLNode.remove_internal_scripts() {
  remove(".//script[not(@src)]")
}
@func XMLNode.remove_scripts() {
  remove(".//script")
}
@func XMLNode.remove_desktop_js() {
  remove("//script[@src and (not(@data-keep) or @data-keep='false')]")
}

# Remove HTML Comment Tags
@func XMLNode.remove_html_comments() {
  remove(".//comment()")
}

# Remove existing conflicting meta tags
@func XMLNode.remove_meta_tags() {
  # Remove only existing meta tags for which we will add our own
  remove(".//meta[@name='viewport']|.//meta[@name='format-detection']")
}

# Add Meta Tags
@func XMLNode.insert_mobile_meta_tags() {
  $("/html/head") {
    insert("meta", http-equiv: "Content-Type", content: "text/html")
    insert("meta", name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")
    insert("meta", name: "format-detection", content: "telephone=no")
  }
}

# Add Canonical Tag
@func XMLNode.add_canonical_tag() {
  $("/html/head") {
    # Inject a canonical link as long as there isn't already one.
    $canonical_found = "false"
    $(".//link[@rel='canonical']") {
      $canonical_found = "true"
    }
    match($canonical_found) {
      with(/false/) {
        insert("link", rel: "canonical", href: concat("http://", $source_host, $path))
      }
    }
    # Remove any alternate tags
    remove(".//link[@rel='alternate']")
  }
}

# Clean Meta Tags
@func XMLNode.clean_mobile_meta_tags() {
  remove_meta_tags()
  insert_mobile_meta_tags()
}

# Add the favicon
@func XMLNode.add_favicon() {
  $("/html/head") {
    insert("link", rel: "shortcut icon", href: asset("images/favicon.ico"))
  }
}

# Add home screen icons
@func XMLNode.add_apple_touch_icons() {
  $("/html/head") {
    # The images below are placeholders; get real ones from the client.
    # See https://goo.gl/5hQURk for specifications.

    # Change to -precomposed to not have the glass effect on the icons
    # (though the "-precomposed" bit is no longer relevant for iOS 7+).

    # iOS won't load the touch icon from a secure domain, so we need
    # to make sure the asset href has "http:".

    # As of 2015-05-11, there is a single 152x152 icon on www.apple.com
    # which will automatically scale down as needed on smaller devices.
    # We should probably encourage the same unless there's a real need
    # to have different smaller icons.

    # insert("link", rel: "apple-touch-icon", sizes: "120x120", href: "http:" + asset("images/apple-touch-icon-120x120.png")) # iPhone retina
    insert("link", rel: "apple-touch-icon", sizes: "152x152", href: "http:" + asset("images/apple-touch-icon-152x152.png")) # iPad retina

  }
}

# Add the generated stylesheet
@func XMLNode.add_mobile_stylesheet() {
  $("/html/head") {
    insert("link", rel: "stylesheet", type: "text/css", href: sass($device_stylesheet), data-mw-keep: "true")
  }
}

# Add the mobile javascript
# Using the variable-setting logic as relying solely on presence of script tags
# is dangerous when removing js or simply on sites with no js.
@func XMLNode.add_mobile_javascript() {
  $("/html/head") {
    $noscript="true"
    $("./script[1]") {
      $noscript="false"
      insert_before("script", data-keep: "true", type: "text/javascript", src: asset("javascript/main.js"))
    }
    match($noscript) {
      with("true") {
        insert_bottom("script", data-keep: "true", type: "text/javascript", src: asset("javascript/main.js"))
      }
    }
  }
}

# Add in our Assets
@func XMLNode.add_assets() {
  add_favicon()
  add_apple_touch_icons()
  add_mobile_stylesheet()
  add_mobile_javascript()
}

@func Text.inferred_content_type() {
  $inferred_content_type = $content_type
  match($x_requested_with, /XMLHttpRequest/) {
    match($content_type, /html/) {
      match(this(), /\A\s*(\[.*\]|{.*}|".*"|'.*'|\d+|true|false)\s*\Z/m) {
        $inferred_content_type = "application/json"
      }
    }
  }
  $inferred_content_type
}

# Add class to a node
@func XMLNode.add_class_to(Text %xpath, Text %class) {
  $(%xpath) {
    add_class(%class)
    yield()
  }
}

# Removes non breaking spaces
@func XMLNode.remove_nbsp() {
  %text = fetch("./text()") {
    replace(/\xC2\xA0/, "")
  }
  inner(%text)
}

# Keep a javascript
@func XMLNode.keep_script(Text %script_src) {
  $("//script[contains(@src, '"+ %script_src +"')]") {
    attribute("data-keep", "true")
    yield()
  }
}

# Remove a javascript
@func XMLNode.remove_script(Text %script_src) {
  $("//script[contains(@src, '"+ %script_src +"')]") {
    attribute("data-keep", "false")
    yield()
  }
}

# Keep a node
@func XMLNode.keep() {
  $("self::*") {
    attribute("data-keep", "true")
  }
}

# Hide a node
@func XMLNode.hide(Text %xpath) {
  $(%xpath) {
    add_class("mw-hide")
    yield()
  }
}

# Hide a node
@func XMLNode.hide() {
  $("self::*") {
    add_class("mw-hide")
  }
}

# removes current node if these 2 conditions are met-
# 1) current node contains no child nodes (except text nodes)
# 2) if the current node does have text nodes, they must be
# empty or all whitespace to be removed
@func XMLNode.remove_self_if_empty() {
  $("./self::*[not(*)]") {
    match(fetch("./text()"), /\A[\s ]*\Z/) {
      remove()
    }
  }
}

# Make phone numbers tappable.
# (Use in inner() or outside of html() scope.)
@func Text.link_phone_number() {
  # capture U.S. phone numbers in various formats
  # e.g. 1-800-555-1212 or (800) 555-1212
  # and make them tappable
  # • may start with "1-" or not
  # • area code may be wrapped in parentheses "(800)" or not
  #   * if not, must be followed by hyphen "800-"
  # • hyphen is required after exchange "555-"
  # • beginning of line or preceded by space or "("
  # • end of line or followed by space or "." "," ";" or ")"
  capture(/(^|[\s\(])((1[\s\.-])?(\(\d{3}\)|\d{3}\s*[-\.])\s*\d{3}\s?[-\.]\s?\d{4})([\s\.,;\)]|$)/) {
    # %1 (^|[\s\(])
    #    potential preceding whitespace or "("

    # %2 ((1[\s-])?(\(\d{3}\)|\d{3}\s*-)\s*\d{3}\s?-\s?\d{4})
    #    full phone number

    # %3 (1[\s-])?
    #    potential leading "1-"

    # %4 (\(\d{3}\)|\d{3}\s*-)
    #    exchange e.g. "800-" or "(800)"

    # %5 ([\s\.,;\)]|$)
    #    potential following whitespace or punctuation
    %2 {
      replace(/\./, "-")
    }
    set(%1 + '<a href="tel:' + %2 + '">' +%2 + '</a>' + %5)
  }
}

@func XMLNode.link_phone_number() {
  inner() {
    link_phone_number()
  }
}
