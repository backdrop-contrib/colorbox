// $Id$
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    $.urlParam = function(name, url){
      var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
      if (!results) { return 0; }
      return results[1] || 0;
    };
    $('a, area, input', context).filter('.colorbox-load:not(.initColorboxLoad-processed)').addClass('initColorboxLoad-processed').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayClose,
      maxWidth:settings.colorbox.maxWidth,
      maxHeight:settings.colorbox.maxHeight,
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
  }
};

})(jQuery);
