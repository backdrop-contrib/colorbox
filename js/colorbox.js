// $Id$
Drupal.behaviors.initColorbox = function (context) {
  var settings = Drupal.settings.colorbox;
  $('.colorbox', context).filter(':not(.initColorbox-processed)').addClass('initColorbox-processed').colorbox({
    transition:settings.transition,
    speed:settings.speed,
    opacity:settings.opacity,
    slideshow:settings.slideshow,
    slideshowSpeed:settings.slideshowspeed,
    slideshowAuto:settings.slideshowauto,
    slideshowStart:settings.slideshowstart,
    slideshowStop:settings.slideshowstop,
    maxWidth:'100%',
    maxHeight:'100%',
    current:settings.current,
    previous:settings.previous,
    next:settings.next,
    close:settings.close
  });
};
