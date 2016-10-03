<?php

if( ! class_exists( 'Gamajo_Template_Loader' ) ) {
	require_once(MEDIZ_PLUGIN_DIR . 'includes/template_loader/class-gamajo-template-loader.php');
}

//Loading the main template class(which is plugin specific) inheried from the root class
require_once(MEDIZ_PLUGIN_DIR . 'includes/template_loader/class-mediz-template-loader.php');

//Loading short codes configured from template loader
require_once(MEDIZ_PLUGIN_DIR . 'includes/template_loader/mediz-short-codes.php');