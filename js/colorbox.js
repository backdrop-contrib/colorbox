/**
 * @file
 * Colorbox module init js.
 */

(function ($) {

Backdrop.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (typeof $.colorbox !== 'function' || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox').each(function() {
        // Only images are supported for the "colorbox" class.
        // The "photo" setting forces the href attribute to be treated as an image.
        var extendParams = {
          photo: true
        };
        // If a title attribute is supplied, sanitize it.
        var title = $(this).attr('title');
        if (typeof title === 'undefined') {
          title = this.dataset.cboxTitle;
        }
        if (title) {
          extendParams.title = Backdrop.colorbox.sanitizeMarkup(title);
        }
        $(this).colorbox($.extend({}, settings.colorbox, extendParams));

        // Only allow http or https protocol in hrefs.
        var href = $(this).attr('href');
        var protocolRegex = /^(https?)/;
        if (href && href.substring(0, 1) !== '/') {
          var protocol = href.split(':')[0];
          // Use a regex to match http or https protocol.
          if (!protocolRegex.test(protocol)) {
            $(this).removeAttr('href');
          }
        }
        var dataHref = this.dataset.cboxHref;
        if (dataHref && dataHref.substring(0, 1) !== '/') {
          var dataProtocol = dataHref.split(':')[0];
          if (!protocolRegex.test(dataProtocol)) {
            delete this.dataset.cboxHref;
          }
        }
        // Since the sanitized title has been passed to colorbox settings,
        // delete the unsanitized data-cbox-title attribute.
        delete this.dataset.cboxTitle;
        // Disallow dangerous data attributes.
        delete this.dataset.cboxIframeAttrs;
        // Sanitize other data attributes.
        var sanitizeDataList = ['cboxNext', 'cboxPrevious', 'cboxCurrent',
          'cboxClose', 'cboxSlideshowstop', 'cboxSlideshowstart',
          'cboxXhrError', 'cboxImgerror', 'cboxHtml'
        ];
        for (var a of sanitizeDataList) {
          if (this.dataset.hasOwnProperty(a)) {
            this.dataset[a] = Backdrop.colorbox.sanitizeMarkup(this.dataset[a]);
          }
        }
      });

    $(context).on('cbox_complete', function () {
      Backdrop.attachBehaviors('#cboxLoadedContent');
    });
  }
};

// Create colorbox namespace if it doesn't exist.
if (!Backdrop.hasOwnProperty('colorbox')) {
  Backdrop.colorbox = {};
}

/**
 * Global function to allow sanitizing captions and control strings.
 *
 * @param markup
 *   String containing potential markup.
 * @return @string
 *  Sanitized string with potentially dangerous markup removed.
 */
Backdrop.colorbox.sanitizeMarkup = function(markup) {
  // If DOMPurify installed, allow some HTML. Otherwise, treat as plain text.
  if (typeof DOMPurify !== 'undefined') {
    var purifyConfig = {
      ALLOWED_TAGS: [
        'a',
        'b',
        'strong',
        'i',
        'em',
        'u',
        'cite',
        'code',
        'br'
      ],
      ALLOWED_ATTR: [
        'href',
        'hreflang',
        'title',
        'target'
      ]
    }
    if (Backdrop.settings.hasOwnProperty('dompurify_custom_config')) {
      purifyConfig = Backdrop.settings.dompurify_custom_config;
    }
    return DOMPurify.sanitize(markup, purifyConfig);
  }
  else {
    return Backdrop.checkPlain(markup);
  }
}

})(jQuery);
