<?php
// Add Scripts
function mediz_load_scripts() {
    	wp_register_style( 'source-sans-pro-css', 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,700', false );
    	wp_enqueue_style( 'source-sans-pro-css' );
	
	wp_enqueue_script('mediz-lib-bbq-script', plugins_url().'/mediz-careers/lib/jquery.ba-bbq.min.js', array('jquery'));
	wp_enqueue_script('mediz-lib-velocity-script', plugins_url().'/mediz-careers/lib/velocity.min.js', array('jquery'));
	
	wp_register_script( 'bootstrap-js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array('jquery'), NULL, true );
    	wp_register_style( 'bootstrap-css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', false, NULL, 'all' );
    	
    	wp_enqueue_script( 'bootstrap-js' );
    	wp_enqueue_style( 'bootstrap-css' );

	wp_enqueue_style('mediz-main-style', plugins_url().'/mediz-careers/css/mediz-careers.css');
	wp_enqueue_style('mediz-default-skin', plugins_url().'/mediz-careers/css/mediz-skin-default.css');
	
	wp_enqueue_script('mediz-main-script', plugins_url().'/mediz-careers/js/mediz-careers.js', array('jquery'));
}


add_action('wp_enqueue_scripts', 'mediz_load_scripts');