// $Id$
Drupal.behaviors.initColorboxLogin = function (context) {
  $("a[href*='/user/login'], a[href*='?q=user/login']", context).colorbox({iframe:true, innerWidth:250, innerHeight:230}).each(function() {
    this.href = this.href.replace(/user\/login/,"user/login/colorbox");
  });
};
