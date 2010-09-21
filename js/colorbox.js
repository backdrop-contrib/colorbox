// $Id$
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    $('a, area, input', context)
      .filter('.colorbox:not(.initColorbox-processed)')
      .addClass('initColorbox-processed')
      .colorbox(settings.colorbox);
  }
};

})(jQuery);
