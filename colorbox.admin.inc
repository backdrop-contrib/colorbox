<?php
// $Id$

/**
 * @file
 * Administrative page callbacks for the colorbox module.
 */

/**
 * General configuration form for controlling the colorbox behaviour.
 */
function colorbox_admin_settings() {
  drupal_add_js(drupal_get_path('module', 'colorbox') .'/js/colorbox_admin_settings.js', 'module', 'header', FALSE, TRUE, FALSE);

  if (module_exists('imagefield')) {
    $form['colorbox_imagefield'] = array(
      '#type' => 'fieldset',
      '#title' => t('Image field options (CCK)')
    );
    $form['colorbox_imagefield']['colorbox_imagefield_gallery'] = array(
      '#type' => 'radios',
      '#title' => t('Image field gallery'),
      '#default_value' => variable_get('colorbox_imagefield_gallery', 1),
      '#options' => array(0 => t('Per page gallery'), 1 => t('Per post gallery'), 2 => t('Per field gallery'), 3 => t('No gallery')),
      '#description' => t('Should the gallery be images within a single field, a single post (default) or all images on the page. The last option disables galleries.'),
    );
    if (module_exists('imagecache')) {
      $presets_options = array(0 => t('Original image (no preset)'));
      foreach (imagecache_presets() as $preset) {
        $presets_options[$preset['presetname']] = $preset['presetname'];
      }
      $form['colorbox_imagefield']['colorbox_imagecache_preset'] = array(
        '#type' => 'select',
        '#title' => t('Imagecache preset'),
        '#options' => $presets_options,
        '#default_value' => variable_get('colorbox_imagecache_preset', 0),
        '#description' => t('Select which Imagecache preset to use for viewing images in the colorbox.'),
      );
    }
  }

  if (module_exists('image')) {
    $form['colorbox_image_module'] = array(
      '#type' => 'fieldset',
      '#title' => t('Image module settings'),
    );
    $form['colorbox_image_module']['colorbox_auto_image_nodes'] = array(
      '#type' => 'radios',
      '#title' => t('Image node setting'),
      '#options' => array(0 => t('Disabled'), 1 => t('Enabled')),
      '#default_value' => variable_get('colorbox_auto_image_nodes', 0),
      '#description' => t('Select if Colorbox should be activated for the Image module.'),
    );
    $derivative_options = array();
    $sizes = image_get_sizes();
    foreach ($sizes as $label => $size) {
      $derivative_options[$label] = $size['label'];
    }
    $form['colorbox_image_module']['colorbox_image_derivative'] = array(
      '#type' => 'select',
      '#title' => t('Image derivative'),
      '#options' => $derivative_options,
      '#default_value' => variable_get('colorbox_image_derivative', 'preview'),
      '#description' => t('Select which image derivative to load in the Colorbox.'),
    );
  }

  $form['colorbox_login_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Login settings')
  );
  $form['colorbox_login_settings']['colorbox_login'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable for login links'),
    '#default_value' => variable_get('colorbox_login', 0),
    '#description' => t('Automatically activate Colorbox for links to user/login.'),
  );
  $form['colorbox_login_settings']['colorbox_login_form'] = array(
    '#type' => 'select',
    '#title' => t('Login form to use'),
    '#options' => array('user_login' => t('User login'), 'user_login_block' => t('User login block'), 'custom' => t('Custom')),
    '#default_value' => variable_get('colorbox_login_form', 'user_login'),
    '#description' => t('Select which form to use for login. If "custom", specify below.'),
  );
  $form['colorbox_login_settings']['colorbox_login_custom'] = array(
    '#type' => 'textfield',
    '#title' => t('Custom login form'),
    '#default_value' => variable_get('colorbox_login_custom', ''),
    '#description' => t('Specify the form id here if you have set the login form to "custom" above.'),
  );

  $form['colorbox_form_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Form settings')
  );
  $form['colorbox_form_settings']['colorbox_form'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable Colorbox forms'),
    '#default_value' => variable_get('colorbox_form', 0),
    '#description' => t('This enables custom links that can open any form in a Colorbox. Add the class "colorbox-form" to the link and build the url like this "/colorbox/form/[form_id]?width=500&height=500".'),
  );

  $form['colorbox_custom_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Style and Custom settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE
  );
  $colorbox_path = variable_get('colorbox_path', COLORBOX_PATH);
  $colorbox_styles = array(
    'default' => t('Default'),
    $colorbox_path .'/example1' => t('Example 1'),
    $colorbox_path .'/example2' => t('Example 2'),
    $colorbox_path .'/example3' => t('Example 3'),
    $colorbox_path .'/example4' => t('Example 4'),
    $colorbox_path .'/example5' => t('Example 5'),
    'none' => t('None'),
  );
  $form['colorbox_custom_settings']['colorbox_style'] = array(
    '#type' => 'select',
    '#title' => t('Style'),
    '#options' => $colorbox_styles,
    '#default_value' => variable_get('colorbox_style', 'default'),
    '#description' => t('Select the style to use for the Colorbox. The example styles are the ones that come with the Colorbox script. Select "None" if you have added Colorbox styles to your theme.'),
  );
  $form['colorbox_custom_settings']['colorbox_custom_settings_activate'] = array(
    '#type' => 'radios',
    '#options' => array(0 => t('Default settings'), 1 => t('Custom settings')),
    '#title' => t('Custom Settings'),
    '#default_value' => variable_get('colorbox_custom_settings_activate', 0),
    '#description' => t('Use the default or custom settings for Colorbox.'),
    '#prefix' => '<div class="colorbox-custom-settings-activate">',
    '#suffix' => '</div>',
  );

  $js_hide = variable_get('colorbox_custom_settings_activate', 0) ? '' : ' js-hide';
  $form['colorbox_custom_settings']['wrapper_start'] = array(
    '#value' => '<div class="colorbox-custom-settings'. $js_hide .'">',
  );

  $form['colorbox_custom_settings']['colorbox_transition_type'] = array(
    '#type' => 'select',
    '#title' => t('Transition type'),
    '#options' => array('elastic' => t('Elastic'), 'fade' => t('Fade'), 'none' => t('None')),
    '#default_value' => variable_get('colorbox_transition_type', 'elastic'),
    '#description' => t('The transition type.'),
  );
  $form['colorbox_custom_settings']['colorbox_transition_speed'] = array(
    '#type' => 'select',
    '#title' => t('Transition speed'),
    '#options' => drupal_map_assoc(array(100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600)),
    '#default_value' => variable_get('colorbox_transition_speed', 350),
    '#description' => t('Sets the speed of the fade and elastic transitions, in milliseconds.'),
  );
  $form['colorbox_custom_settings']['colorbox_opacity'] = array(
    '#type' => 'select',
    '#title' => t('Opacity'),
    '#options' => drupal_map_assoc(array('0', '0.10', '0.15', '0.20', '0.25', '0.30', '0.35', '0.40', '0.45', '0.50', '0.55', '0.60', '0.65', '0.70', '0.75', '0.80', '0.85', '0.90', '0.95', '1')),
    '#default_value' => variable_get('colorbox_opacity', '0.90'),
    '#description' => t('The overlay opacity level. Range: 0 to 1.'),
  );
  $form['colorbox_custom_settings']['colorbox_text_current'] = array(
    '#type' => 'textfield',
    '#title' => t('Current'),
    '#default_value' => variable_get('colorbox_text_current', '{current} of {total}'),
    '#description' => t('Text format for the content group / gallery count. {current} and {total} are detected and replaced with actual numbers while Colorbox runs.'),
  );
  $form['colorbox_custom_settings']['colorbox_text_previous'] = array(
    '#type' => 'textfield',
    '#title' => t('Previous'),
    '#default_value' => variable_get('colorbox_text_previous', '« Prev'),
    '#description' => t('Text for the previous button in a shared relation group.'),
  );
  $form['colorbox_custom_settings']['colorbox_text_next'] = array(
    '#type' => 'textfield',
    '#title' => t('Next'),
    '#default_value' => variable_get('colorbox_text_next', 'Next »'),
    '#description' => t('Text for the next button in a shared relation group.'),
  );
  $form['colorbox_custom_settings']['colorbox_text_close'] = array(
    '#type' => 'textfield',
    '#title' => t('Close'),
    '#default_value' => variable_get('colorbox_text_close', 'Close'),
    '#description' => t('Text for the close button. The "Esc" key will also close Colorbox.'),
  );

  $form['colorbox_custom_settings']['colorbox_slideshow_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Slideshow settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE
  );
  $form['colorbox_custom_settings']['colorbox_slideshow_settings']['colorbox_slideshow'] = array(
    '#type' => 'radios',
    '#title' => t('Slideshow'),
    '#options' => array(0 => t('No'), 1 => t('Yes')),
    '#default_value' => variable_get('colorbox_slideshow', 0),
    '#description' => t('An automatic slideshow to a content group / gallery.'),
  );
  $form['colorbox_custom_settings']['colorbox_slideshow_settings']['colorbox_slideshowauto'] = array(
    '#type' => 'radios',
    '#title' => t('Slideshow autostart'),
    '#options' => array(0 => t('No'), 1 => t('Yes')),
    '#default_value' => variable_get('colorbox_slideshowauto', 1),
    '#description' => t('If the slideshow should automatically start to play.'),
  );
  $form['colorbox_custom_settings']['colorbox_slideshow_settings']['colorbox_slideshowspeed'] = array(
    '#type' => 'select',
    '#title' => t('Slideshow speed'),
    '#options' => drupal_map_assoc(array(1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000)),
    '#default_value' => variable_get('colorbox_slideshowspeed', 2500),
    '#description' => t('Sets the speed of the slideshow, in milliseconds.'),
  );
  $form['colorbox_custom_settings']['colorbox_slideshow_settings']['colorbox_text_start'] = array(
    '#type' => 'textfield',
    '#title' => t('Start slideshow'),
    '#default_value' => variable_get('colorbox_text_start', 'start slideshow'),
    '#description' => t('Text for the slideshow start button.'),
  );
  $form['colorbox_custom_settings']['colorbox_slideshow_settings']['colorbox_text_stop'] = array(
    '#type' => 'textfield',
    '#title' => t('Stop slideshow'),
    '#default_value' => variable_get('colorbox_text_stop', 'stop slideshow'),
    '#description' => t('Text for the slideshow stop button.'),
  );

  $form['colorbox_custom_settings']['wrapper_stop'] = array(
    '#value' => '</div>',
  );

  $form['colorbox_advanced_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Advanced settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE
  );
  $form['colorbox_advanced_settings']['colorbox_title_trim'] = array(
    '#type' => 'radios',
    '#title' => t('Title shortening'),
    '#options' => array(0 => t('Default'), 1 => t('Yes')),
    '#default_value' => variable_get('colorbox_title_trim', 0),
    '#description' => t('If the title should be made shorter in the Colorbox to avoid layout problems. The default is to shorten for the example styles, they need it, but not for other styles.'),
    '#prefix' => '<div class="colorbox-title-trim-settings-activate">',
    '#suffix' => '</div>',
  );
  $js_hide = variable_get('colorbox_title_trim', 0) ? '' : ' js-hide';
  $form['colorbox_advanced_settings']['colorbox_title_trim_length'] = array(
    '#type' => 'select',
    '#title' => t('Title max length'),
    '#options' => drupal_map_assoc(array(40, 45, 50, 55, 60, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120)),
    '#default_value' => variable_get('colorbox_title_trim_length', 75),
    '#prefix' => '<div class="colorbox-title-trim-settings'. $js_hide .'">',
    '#suffix' => '</div>',
  );
  $form['colorbox_advanced_settings']['colorbox_path'] = array(
    '#type' => 'textfield',
    '#title' => t('Path to Colorbox'),
    '#default_value' => $colorbox_path,
    '#description' => t('Enter the path relative to Drupal root where the colorbox directory is located. NO trailing slash!'),
  );
  $form['colorbox_advanced_settings']['colorbox_compression_type'] = array(
    '#type' => 'radios',
    '#title' => t('Choose Colorbox compression level'),
    '#options' => array(
      'min' => t('Production (Minified)'),
      'none' => t('Development (Uncompressed Code)'),
    ),
    '#default_value' => variable_get('colorbox_compression_type', 'min'),
  );
  $form['colorbox_advanced_settings']['colorbox_pages'] = array(
    '#type' => 'textarea',
    '#title' => t('Deactivate Colorbox on specific pages'),
    '#default_value' => variable_get('colorbox_pages', "admin*\nimg_assist*\nnode/add/*\nnode/*/edit"),
    '#description' => t("Enter one page per line as Drupal paths. The '*' character is a wildcard. Example paths are %blog for the blog page and %blog-wildcard for every personal blog. %front is the front page.", array('%blog' => 'blog', '%blog-wildcard' => 'blog/*', '%front' => '<front>')),
  );

  return system_settings_form($form);
}

