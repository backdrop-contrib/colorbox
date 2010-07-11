// $Id$
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    $('a, area, input', context).filter('.colorbox:not(.initColorbox-processed)').addClass('initColorbox-processed').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      slideshow:settings.colorbox.slideshow,
      slideshowSpeed:settings.colorbox.slideshowSpeed,
      slideshowAuto:settings.colorbox.slideshowAuto,
      slideshowStart:settings.colorbox.slideshowStart,
      slideshowStop:settings.colorbox.slideshowStop,
      current:settings.colorbox.current,
      previous:settings.colorbox.previous,
      next:settings.colorbox.next,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayClose,
      maxWidth:settings.colorbox.maxWidth,
      maxHeight:settings.colorbox.maxHeight
    });
  }
};

})(jQuery);
