// $Id$
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    $('a, area, input', context).filter('.colorbox:not(.initColorbox-processed)').addClass('initColorbox-processed').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      slideshow:settings.colorbox.slideshow,
      slideshowSpeed:settings.colorbox.slideshowspeed,
      slideshowAuto:settings.colorbox.slideshowauto,
      slideshowStart:settings.colorbox.slideshowstart,
      slideshowStop:settings.colorbox.slideshowstop,
      current:settings.colorbox.current,
      previous:settings.colorbox.previous,
      next:settings.colorbox.next,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayclose,
      maxWidth:settings.colorbox.maxwidth,
      maxHeight:settings.colorbox.maxheight
    });
  }
};

})(jQuery);
