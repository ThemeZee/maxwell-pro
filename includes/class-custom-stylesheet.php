<?php
/***
 * Custom Stylesheet
 *
 * Creates a custom stylesheet including the custom color, custom fonts and header spacing CSS code
 *
 * @package Maxwell Pro
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;


// Use class to avoid namespace collisions
if ( ! class_exists( 'Maxwell_Pro_Custom_Stylesheet' ) ) :

class Maxwell_Pro_Custom_Stylesheet {

	/**
	 * Footer Widgets Setup
	 *
	 * @return void
	*/
	static function setup() {
		
		// Return early if Maxwell Theme is not active
		if ( ! current_theme_supports( 'maxwell-pro'  ) ) {
			return;
		}
		
		// Enqueue Custom CSS Stylesheet
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'enqueue_custom_stylesheet' ), 20 );
		
		// Print Custom CSS in stylesheet
		self::print_custom_css();
		
		// Print custom CSS to wp_head in Customizer for live preview
		add_action( 'wp_head', array( __CLASS__, 'customizer_custom_css' ) );
		
	}
	
	/**
	 * Register and Enqueue Custom CSS Stylesheet
	 *
	 */
	static function enqueue_custom_stylesheet() {
	
		// Do not include stylesheet in Customizer
		if ( is_customize_preview() ) {
			return;
		}

		wp_enqueue_style( 'maxwell-pro-custom-stylesheet', add_query_arg( 'maxwell_pro_custom_css', 1, home_url( '/' ) ) );
		
	}
	
	/**
	 * If the query var is set, print the Custom CSS rules.
	 *
	 */
	static function print_custom_css() {
		
		// Only print CSS if this is a stylesheet request
		if( ! isset( $_GET['maxwell_pro_custom_css'] ) || intval( $_GET['maxwell_pro_custom_css'] ) !== 1 ) {
			return;
		}

		// CSS File Header
		ob_start();
		header( 'Content-type: text/css' );
		
		// Get CSS
		$raw_css = self::get_custom_css();
		
		// Sanitize CSS Code
		$css = wp_kses( $raw_css, array( '\'', '\"' ) );
		$css = str_replace( '&gt;', '>', $css );
		$css = preg_replace( '/\t\t\t\t/', '', $css );
		
		// Print CSS
		echo $css;
		die();
	}
	
	/**
	 * Print Custom CSS in Customizer for live preview
	 *
	 */
	static function customizer_custom_css() {
		
		// Do not include stylesheet in Customizer
		if ( ! is_customize_preview() ) {
			return;
		}
		
		echo '<style type="text/css">';
		echo self::get_custom_css();
		echo '</style>';
		
	}
	
	/**
	 * Get Custom CSS code from other modules
	 *
	 */
	static function get_custom_css() {
		
		// Allow other modules to add CSS code per filter
		return apply_filters( 'maxwell_pro_custom_css_stylesheet', '' );
		
	}

}

// Run Class
add_action( 'init', array( 'Maxwell_Pro_Custom_Stylesheet', 'setup' ) );

endif;