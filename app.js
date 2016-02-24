(function() {
  return {
    events: {
      'click .js-zapier-hook' : function(event) {
        event.preventDefault();

        //Logic to only allow one gift to be generated per click (unbind doesn't seem to work, so this is an alternate fix)
        var $action_button = this.$("button.js-zapier-hook");
        var $clicked_button = this.$("button.js-zapier-clicked");
        $action_button.hide();
        $clicked_button.show();

        //Set some basics needed for our request below
        var ticket_id = this.ticket().id();
        var zapier_hook = this.settings.zapier_hook;
        var zapier_call = zapier_hook + "?ticket_id=" + ticket_id;
        var ajax_request = new XMLHttpRequest();

        //Post to our Zapier Webhook to generate our new Gift URL (Zapier handles the rest of the return)
        ajax_request.open('POST', zapier_call, true);
        ajax_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        ajax_request.onreadystatechange = function() {
          console.log(ajax_request.readyState, ajax_request.status, ajax_request.responseText);
          if (ajax_request.readyState != 4) return;
          if (ajax_request.status === 200) {
            $clicked_button.html("Success! Gift Should Display Shortly");
          }
          else if (ajax_request.status !== 200) {
            $clicked_button.html("Failed: No Gift URL Resposne");
          }
        };
        $clicked_button.html("Processing...");
        ajax_request.send("");
      }
    }
  };
}());