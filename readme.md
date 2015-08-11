COLORBOX
===================

CONTENTS OF THIS FILE
---------------------

 - Introduction
 - Tested
 - Known Issues
 - Special Thanks
 - Requirements
 - Installation
 - Coming From Drupal?
 - Usage
 - License
 - Credits
 - Maintainers

INTRODUCTION
------------

This is a very simple module that opens up images or content from your Backdrop site into a popup/modal "lightbox" and is very customizable.

Colorbox is a light-weight, customizable lightbox plugin for jQuery 1.4.3+.  This module allows for integration of Colorbox into Backdrop.  Images, iframed or inline content etc. can be displayed in a overlay above the current page.

* JQuery - http://jquery.com/
* Colorbox - http://www.jacklmoore.com/colorbox/

TESTED
-----

Installed and opened a few images/content in Backdrop 1.1

KNOWN ISSUES
---------------------

@todo

SPECIAL THANKS
--------------

http://www.jacklmoore.com/

REQUIREMENTS
------------

You need to download the Colorbox script separately from downloading this module at this address: http://www.jacklmoore.com/colorbox -- the correct version is linked in the status report of your website.

Backdrop CMS supplies the correct version of JQuery.


INSTALLATION
------------

Install this module using the official Backdrop CMS instructions at https://backdropcms.org/guide/modules

Then

Download and install the Libraries module.

Then and install the Colorbox script so the scripts are in the folder /libraries/colorbox

Documentation may be found here: https://www.drupal.org/node/1971564


COMING FROM DRUPAL?
-------------------

Nothing substantially different.

PERMISSIONS
------------

@todo


USAGE
-----

The Colorbox module:

* Excellent integration with Image field and Image styles
* Choose between a default style and 5 example styles that are included.
* Style the Colorbox with a custom colorbox.css file in your theme.
* (coming soon) Drush command to download and install the Colorbox plugin in /libraries

The Colorbox plugin:

* Supports photos, grouping, slideshow, ajax, inline, and iframed content.
* Appearance is controlled through CSS so it can be restyled.
* Preloads upcoming images in a photo group.
* Completely unobtrusive, options are set in the JS and require no changes to existing HTML.
* Released under the MIT License.

Configuration:
-------------
Go to "Configuration" -> "Media" -> "Colorbox" to find
all the configuration options.

Documentation:
-------------
https://www.drupal.org/node/1971564

LICENSE
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for complete text.

CREDITS
-----------

This module is based on the Colorbox module for Drupal, originally written and maintained by a large number of contributors, including:

- Fredrik Jonsson <http://drupal.org/user/5546>

MAINTAINERS
-----------

- seeking

Ported to Backdrop by:

 - biolithic <https://github.com/biolithic>
