// $Id$
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = function (context) {
  $(document).bind('cbox_open', function() {
    // Hide close button initially.
    $('#cboxClose').css('opacity', 0);
  });
  $(document).bind('cbox_load', function() {
    // Hide close button. (It doesn't handle the load animation well.)
    $('#cboxClose').css('opacity', 0);
  });
  $(document).bind('cbox_complete', function() {
    // Show close button with a delay.
    $('#cboxClose').fadeTo('fast', 0, function() {$(this).css('opacity', 1)});
  });
};

})(jQuery);
