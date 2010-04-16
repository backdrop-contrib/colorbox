// $Id$
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = function (context) {
  $(document).bind('cbox_complete', function(){
    // Only run if there is a title.
    if ($('#cboxTitle:empty').length == false) {
      setTimeout(function(){ $('#cboxTitle').slideUp() }, 1500);
      $('#cboxLoadedContent').bind('mouseover', function(){
        $('#cboxTitle').slideDown();
      });
      $('#cboxOverlay').bind('mouseover', function(){
        $('#cboxTitle').slideUp();
      });
    }
    else {
      $('#cboxTitle').hide();
    }
  });
};

})(jQuery);