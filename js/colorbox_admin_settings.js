// $Id$
Drupal.behaviors.initColorboxAdminSettings = function (context) {
  $('div.colorbox-custom-settings-activate input.form-radio').click(function () {
    if (this.value == 1) {
      $('div.colorbox-custom-settings').show();
    }
    else {
      $('div.colorbox-custom-settings').hide();
    }
  });
};