# The main file executed by Tritium. The start of all other files.
$content_type = inferred_content_type()

@import page_type.ts
@import robots.ts


match($content_type) {
  with(/html/) {
    
    protect_xmlns()

    # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
    # simply remove the "UTF-8" argument.  e.g. html(){ ... }
    html("UTF-8") {
      @import "html.ts"
    }

    restore_xmlns()
    restore_dollar_sign()
  }
  with(/ajax/) {
     html_fragment() {
      @import ajax.ts
    }
  }
  
  with(/text\/plain/) {
    match($path, /^\/.+?\.aspx/) {
      @import "aspnet.ts"
    }
  }
  with(/text\/css|image|javascript/) {
    cache.enable()
  }


  else() {
  }
}
