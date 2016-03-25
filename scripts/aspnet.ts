# The following section is required for when dealing with .NET Ajax
# The content length is encoded and requires extra special handling
# by calculating said length.

capture(/(\d+)\|(\w*)\|(\w*)\|(.*?)(?=\|\d+\||\|$)/m) {
  %length = %1   # content length
  %type = %2     # e.g. updatePanel, scriptStartupBlock
  %id = %3       # optional container id
  %content = %4  # actual content
  match(%type, "updatePanel") {
    %content {
      $charset_determined = "utf-8" # force encoding for proper length
      html_fragment("utf-8") {

        rewrite_links()
        absolutize()

        # Needed to begin mobilizing
        remove_all_styles()

        #match($path) {
        #}
    
      }
    }
  }
  
  match(%type, "scriptStartupBlock") {
    # inline javascript
  }
  
  set(length(%content) + "|" + %type + "|" + %id + "|" + %content)
}
