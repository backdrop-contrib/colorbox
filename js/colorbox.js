// $Id$
(function ($) {

Drupal.behaviors.initColorbox = function (context) {
  var settings = Drupal.settings.colorbox;
  $('a, area, input', context).filter('.colorbox:not(.initColorbox-processed)').addClass('initColorbox-processed').colorbox({
    transition:settings.transition,
    speed:settings.speed,
    opacity:settings.opacity,
    slideshow:settings.slideshow,
    slideshowSpeed:settings.slideshowspeed,
    slideshowAuto:settings.slideshowauto,
    slideshowStart:settings.slideshowstart,
    slideshowStop:settings.slideshowstop,
    current:settings.current,
    previous:settings.previous,
    next:settings.next,
    close:settings.close,
    overlayClose:settings.overlayclose,
    maxWidth:settings.maxwidth,
    maxHeight:settings.maxheight
  });
};

})(jQuery);
