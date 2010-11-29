// $Id$
(function ($) {

Drupal.behaviors.initColorboxLogin = {
  attach: function (context, settings) {
    $("a[href*='/user/login'], a[href*='?q=user/login']", context).once('init-colorbox-login-processed', function () {
      this.href = this.href.replace(/user\/login/,"user/login/colorbox");
    }).colorbox({
      innerWidth:250,
      innerHeight:230,
      onComplete:function(){
        $('#edit-name').focus();
      }
    });
  }
};

})(jQuery);
