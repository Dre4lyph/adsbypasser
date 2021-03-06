$.register({
  rule: {
    host: /^(www\.)?shink\.in$/,
    path: /^\/\w+$/,
  },
  ready: function () {
    'use strict';

    var f = $('#skip');

    if (!$.$('#captcha')) {
      // No captcha, we can redirect straight away
      f.submit();
      return;
    }

    // Hide countdown
    var envio = $("#envio");
    envio.disabled = false;  
    envio.style.visibility= "hidden";  
    envio.style.display='none';

    // Display skip button
    var envio2 = $("#envio2");
    envio2.style.visibility= "visible";  
    envio2.style.display='block';

    // Force captcha window to be shown
    $.window.$("#myModal").reveal();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
