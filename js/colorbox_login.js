// $Id$
(function ($) {

Drupal.behaviors.initColorboxLogin = function (context) {
  $("a[href*='/user/login'], a[href*='?q=user/login']", context).colorbox({
    innerWidth:250,
    innerHeight:230,
    onComplete:function(){
      $('#edit-name').focus();
    }
  }).each(function() {
      this.href = this.href.replace(/user\/login/,"user/login/colorbox");
  });
};

})(jQuery);
