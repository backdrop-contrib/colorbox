// $Id$
if (jQuery().colorbox) {
  Drupal.behaviors.colorbox = function (context) {
    // Image Attach Functionality
    $('.image-attach-body > a').each(function (i) {
      // Modify link to jpg
      this.href = $('.image-attach-body > a > img:eq('+i+')').attr("src").replace(".thumbnail", "");
      // Add rel tag to group
      this.rel = "testing1";
      // Colorbox it
      $("a[rel='testing1']").colorbox();
    });
    $('.colorbox').colorbox();
  };
}
