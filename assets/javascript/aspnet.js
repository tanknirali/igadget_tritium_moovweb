if (window.Sys) {
  // automatically set up Uranium in Ajaxed content
  Sys.WebForms.PageRequestManager.prototype.__updatePanel = Sys.WebForms.PageRequestManager.prototype._updatePanel;
  Sys.WebForms.PageRequestManager.prototype._updatePanel = function(updatePanelElement, rendering) {
    this.__updatePanel(updatePanelElement, rendering);
    $(updatePanelElement).Uranium();
  };
  
  // Ajax callback
  Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function(sender, args) {
    var url = args.get_response().get_webRequest().get_url();
    /*
    if (/regex/.test(url)) {
      ...
    }
    */
  });
}
