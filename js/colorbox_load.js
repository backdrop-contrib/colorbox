// $Id$
(function ($) {

Drupal.behaviors.initColorboxLoad = function (context) {
  var settings = Drupal.settings.colorbox;
  $.urlParam = function(name, url){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) { return 0; }
    return results[1] || 0;
  };
  $('a, area, input', context).filter('.colorbox-load:not(.initColorboxLoad-processed)').addClass('initColorboxLoad-processed').colorbox({
    transition:settings.transition,
    speed:settings.speed,
    opacity:settings.opacity,
    close:settings.close,
    overlayClose:settings.overlayclose,
    maxWidth:settings.maxwidth,
    maxHeight:settings.maxheight,
    innerWidth:function(){
      return $.urlParam('width', $(this).attr('href'));
    },
    innerHeight:function(){
      return $.urlParam('height', $(this).attr('href'));
    },
    iframe:function(){
      return $.urlParam('iframe', $(this).attr('href'));
    },
    onComplete:function(){
      $('input:first').focus();
    }
  });
};

})(jQuery);
