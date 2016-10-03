<?php
/**
* Plugin Name: Mediz Careers
* Description: All the custom code(styles, script and images) related to Mediz Careers portal
* Version: 1.0
* Author: Vamsi Varma
*
**/

// Exit if Accessed Directly
if(!defined('ABSPATH')){
	exit;
}

define( 'MEDIZ_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

// Load Scripts
require_once(plugin_dir_path(__FILE__).'/includes/mediz-careers-scripts.php');

//Load Templates Loader
require_once(plugin_dir_path(__FILE__).'/includes/template_loader/mediz-templates-loader.php');