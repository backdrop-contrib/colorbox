Drupal colorbox module:
------------------------
Maintainers:
  Joe Wheaton (http://drupal.org/user/298179)
  Fredrik Jonsson (http://drupal.org/user/5546)
Requires - Drupal 6 and jQuery Update version 6.x-2.x
License - GPL (see LICENSE)


Overview:
--------
The Colorbox module is a wrapper for Colorbox, a light-weight,
customizable lightbox plugin for jQuery 1.3 and 1.4.
The jQuery library is a part of Drupal since version 5+.

Integrates with Image, Imagefield and Imagecache modules.

Provides a feature to display the login form in a Colorbox and a simple API to display any form in a Colorbox.

* jQuery - http://jquery.com/
* Colorbox - http://colorpowered.com/colorbox/


Drush:
------
A Drush command is provides for easy installation of the Colorbox script itself.

% drush colorbox-script

The command will download the script and unpack it in sites/all/libraries. It is
possible to add another path as an option to the command, but not recommended unless you know what you are doing.


Installation:
------------
1. Download and install the jQuery Update module version 6.x-2.x.
2. Download and unpack the Colorbox script itself to "sites/all/libraries".
   Drush users can just use the command "drush colorbox-script".
3. Place this module directory in your modules folder (this will
   usually be "sites/all/modules/").
4. Go to "Administer" -> "Site building" -> "Modules" and enable the module.


Configuration:
-------------
Go to "Administer" -> "Site configuration" -> "Colorbox" to find
all the configuration options.


Contributions:
-------------
* Porting all features from the Thickbox module,
  by Fredrik Jonsson (http://drupal.org/user/5546).


Last updated:
------------
$Id$