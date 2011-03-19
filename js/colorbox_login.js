(function ($) {

Drupal.behaviors.initColorboxLogin = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $("a[href*='/user/login'], a[href*='?q=user/login']", context).once('init-colorbox-login-processed', function () {
      this.href = this.href.replace(/user\/login/,"user/login/colorbox");
    }).colorbox({
      initialWidth:200,
      initialHeight:200,
      onComplete:function(){
        $('#edit-name').focus();
      }
    });
  }
};

})(jQuery);
