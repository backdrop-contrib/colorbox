// $Id$
(function ($) {

Drupal.behaviors.initColorboxInline = function (context) {
  var settings = Drupal.settings.colorbox;
  $.urlParam = function(name, url){
    if (name == 'fragment') {
      var results = new RegExp('(#[^&#]*)').exec(url);
    }
    else {
      var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    }
    if (!results) { return 0; }
    return results[1] || 0;
  };
  $('a, area, input', context).filter('.colorbox-inline:not(.initColorboxInline-processed)').addClass('initColorboxInline-processed').colorbox({
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
    inline:function(){
      return $.urlParam('inline', $(this).attr('href'));
    },
    href:function(){
      return $.urlParam('fragment', $(this).attr('href'));
    }
  });
};

})(jQuery);
