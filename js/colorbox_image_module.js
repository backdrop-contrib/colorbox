// $Id$
Drupal.behaviors.initColorboxImageModule = function (context) {
  // Image Attach Functionality
  $('.image-attach-body > a').each(function (i) {
    // Modify link to jpg
    this.href = $('.image-attach-body > a > img:eq('+i+')').attr("src").replace(".thumbnail", "");
    // Add rel tag to group
    this.rel = "image-gallery";
    // Colorbox it
  });
  $("a[rel='image-gallery']").colorbox();
};
