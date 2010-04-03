// $Id$
Drupal.behaviors.initColorboxDefaultStyle = function (context) {
  $(document).bind('cbox_complete', function(){
    setTimeout(function(){ $('#cboxTitle').slideUp() }, 1500);
    $('#cboxLoadedContent').bind('mouseover', function(){
      $('#cboxTitle').slideDown();
    });
    $('#cboxOverlay').bind('mouseover', function(){
      $('#cboxTitle').slideUp();
    });
  });
};