<?php
// $Id$

/**
 * @file
 *   drush integration for colorbox.
 */

/**
 * The Colorbox library URI.
 */
define('COLORBOX_DOWNLOAD_URI', 'http://colorpowered.com/colorbox/colorbox.zip');

/**
 * Implementation of hook_drush_command().
 *
 * In this hook, you specify which commands your
 * drush module makes available, what it does and
 * description.
 *
 * Notice how this structure closely resembles how
 * you define menu hooks.
 *
 * @See drush_parse_command() for a list of recognized keys.
 *
 * @return
 *   An associative array describing your command(s).
 */
function colorbox_drush_command() {
  $items = array();

  // the key in the $items array is the name of the command.
  $items['colorbox-script'] = array(
    'callback' => 'colorbox_drush_colorbox_script',
    'description' => dt("Downloads the Colorbox library."),
    'arguments' => array(
      'path' => dt('Optional. A path where to install the Colorbox library. If omitted Drush will use the default location.'),
    ),
  );

  return $items;
}

/**
 * Implementation of hook_drush_help().
 *
 * This function is called whenever a drush user calls
 * 'drush help <name-of-your-command>'
 *
 * @param
 *   A string with the help section (prepend with 'drush:')
 *
 * @return
 *   A string with the help text for your command.
 */
function colorbox_drush_help($section) {
  switch ($section) {
    case 'drush:colorbox-script':
      return dt("Downloads the Colorbox library from colorpowered.com, default location is sites/all/libraries.");
  }
}

/**
 * Example drush command callback.
 *
 * This is where the action takes place.
 *
 * In this function, all of Drupals API is (usually) available, including
 * any functions you have added in your own modules/themes.
 *
 * To print something to the terminal window, use drush_print().
 *
 */
function colorbox_drush_colorbox_script() {
  $args = func_get_args();
  if ($args[0]) {
    $path = $args[0];
  }
  else {
    $path = 'sites/all/libraries';
  }

  // Set the directory to the download location.
  $olddir = getcwd();
  chdir($path);

  $filename = basename(COLORBOX_DOWNLOAD_URI);
  $dirname = basename(COLORBOX_DOWNLOAD_URI, ".zip");

  // Remove any existing Colorbox library directory
  if (is_dir($dirname)) {
    drush_log(dt('A existing Colorbox library was overwritten from @path', array('@path' => $path)), 'notice');
  }
  // Remove any existing Colorbox library zip archive
  if (is_file($filename)) {
    drush_op('unlink', $filename);
  }

  // Download the zip archive
  if (!drush_shell_exec('wget '. COLORBOX_DOWNLOAD_URI)) {
    drush_shell_exec('curl -O '. COLORBOX_DOWNLOAD_URI);
  }

  if (is_file($filename)) {
    // Decompress the zip archive
    drush_shell_exec('unzip -qq -o '. $filename);
    // Remove the zip archive
    drush_op('unlink', $filename);
  }

  // Set working directory back to the previous working directory.
  chdir($olddir);

  if (is_dir($path .'/'. $dirname)) {
    drush_log(dt('Colorbox library has been downloaded to @path', array('@path' => $path)), 'success');
  }
  else {
    drush_log(dt('Drush was unable to download the Colorbox library to @path', array('@path' => $path)), 'error');
  }
}
