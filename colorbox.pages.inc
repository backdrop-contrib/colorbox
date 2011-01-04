<?php
// $Id$

/**
 * @file
 * User page callback file for the colorbox module.
 */

/**
 * Menu callback for colorbox_login.
 */
function colorbox_login() {
  $form_id = variable_get('colorbox_login_form', '');

  // Redirect failed logins to the standard user login form.
  if (isset($_POST['form_id']) && $_POST['form_id'] == $form_id) {
    return drupal_get_form('user_login');
  }

  colorbox_form_page($form_id);
}

/**
 * Menu callback for colorbox_form_page.
 */
function colorbox_form_page($form_id) {
  $GLOBALS['devel_shutdown'] = FALSE; // Prevent devel module from spewing.

  switch ($form_id) {
    case 'contact_site_form':
      module_load_include('inc', 'contact', 'contact.pages');
    case 'user_pass':
      module_load_include('inc', 'user', 'user.pages');
    default:
      $form = drupal_get_form($form_id);
      if (!empty($form)) {
        print drupal_render($form);
      }
  }

  exit;
}
