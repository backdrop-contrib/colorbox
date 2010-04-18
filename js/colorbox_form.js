// $Id$
(function ($) {

Drupal.behaviors.initColorboxForm = function (context) {
  var settings = Drupal.settings.colorbox;
  $.urlParam = function(name, url){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) { return 0; }
    return results[1] || 0;
  };
  $('.colorbox-form', context).filter(':not(.initColorboxForm-processed)').addClass('initColorboxForm-processed').colorbox({
    innerWidth:function(){
      return $.urlParam('width', $(this).attr('href'));
    },
    innerHeight:function(){
      return $.urlParam('height', $(this).attr('href'));
    },
    iframe:true,
    transition:settings.transition,
    speed:settings.speed,
    opacity:settings.opacity,
    maxWidth:'100%',
    maxHeight:'100%',
    close:settings.close
  });
};

})(jQuery);
