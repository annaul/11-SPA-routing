'use strict';

(function(module) {
  const aboutController = {};
  aboutController.show = function() {
    // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
    $('#articles').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
