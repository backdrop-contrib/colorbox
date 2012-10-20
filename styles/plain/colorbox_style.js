(function ($) {

Drupal.behaviors.initColorboxPlainStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_complete', function () {
      // Make all the controls invisible.
      $('#cboxCurrent, #cboxSlideshow, #cboxPrevious, #cboxNext', context).addClass('element-invisible');
      // Set some vars.
      var cboxTitle = $('#cboxTitle', context);
      var cboxClose = $('#cboxClose', context);
      // Replace "Close" with "×" and show.
      cboxClose.html('\327').addClass('cbox-close-plain');
      // Only run if there is a title.
      var isTitle = ($('#cboxTitle:empty', context).length == false) ? true : false;
      $('#cboxLoadedContent img', context).bind('mouseover', function () {
        if (isTitle == true) {
          cboxTitle.slideDown();
        }
        cboxClose.animate({opacity: 1}, 'fast');
      });
      $('#cboxOverlay', context).bind('mouseover', function () {
        if (isTitle == true) {
          cboxTitle.slideUp();
        }
        cboxClose.animate({opacity: 0}, 'fast');
      });
      if (isTitle == false) {
        cboxTitle.hide();
      }
    });
    $(document).bind('cbox_closed', function () {
      $('#cboxClose', context).removeClass('cbox-close-plain');
    });
  }
};

})(jQuery);
