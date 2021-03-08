<?php
/**
 * Customizer
 *
 * Setup the Customizer and theme options for the Pro plugin
 *
 * @package Maxwell Pro
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Customizer Class
 */
class Maxwell_Pro_Customizer {

	/**
	 * Customizer Setup
	 *
	 * @return void
	 */
	static function setup() {

		// Return early if Maxwell Theme is not active.
		if ( ! current_theme_supports( 'maxwell-pro' ) ) {
			return;
		}

		// Enqueue scripts and styles in the Customizer.
		add_action( 'customize_preview_init', array( __CLASS__, 'customize_preview_js' ) );
		add_action( 'customize_controls_print_styles', array( __CLASS__, 'customize_preview_css' ) );

		// Remove Upgrade section.
		remove_action( 'customize_register', 'maxwell_customize_register_upgrade_settings' );
	}

	/**
	 * Get saved user settings from database or plugin defaults
	 *
	 * @return array
	 */
	static function get_theme_options() {

		// Merge Theme Options Array from Database with Default Options Array.
		return wp_parse_args( get_option( 'maxwell_theme_options', array() ), self::get_default_options() );
	}


	/**
	 * Returns the default settings of the plugin
	 *
	 * @return array
	 */
	static function get_default_options() {

		$default_options = array(
			'header_logo'               => '',
			'header_spacing'            => 30,
			'logo_spacing'              => 0,
			'header_search'             => false,
			'author_bio'                => false,
			'scroll_to_top'             => false,
			'footer_text'               => '',
			'credit_link'               => true,
			'primary_color'             => '#33bbcc',
			'secondary_color'           => '#008899',
			'tertiary_color'            => '#005566',
			'accent_color'              => '#cc3833',
			'highlight_color'           => '#009912',
			'light_gray_color'          => '#f0f0f0',
			'gray_color'                => '#999999',
			'dark_gray_color'           => '#303030',
			'page_bg_color'             => '#ffffff',
			'top_navi_color'            => '#303030',
			'navi_color'                => '#303030',
			'link_color'                => '#33bbcc',
			'link_hover_color'          => '#303030',
			'button_color'              => '#33bbcc',
			'button_hover_color'        => '#303030',
			'title_color'               => '#303030',
			'widget_title_color'        => '#303030',
			'text_font'                 => 'Titillium Web',
			'title_font'                => 'Amaranth',
			'title_is_bold'             => true,
			'title_is_uppercase'        => false,
			'navi_font'                 => 'Titillium Web',
			'navi_is_bold'              => false,
			'navi_is_uppercase'         => false,
			'widget_title_font'         => 'Amaranth',
			'widget_title_is_bold'      => true,
			'widget_title_is_uppercase' => false,
		);

		return $default_options;
	}

	/**
	 * Embed JS file to make Theme Customizer preview reload changes asynchronously.
	 *
	 * @return void
	 */
	static function customize_preview_js() {
		wp_enqueue_script( 'maxwell-pro-customizer-js', MAXWELL_PRO_PLUGIN_URL . 'assets/js/customize-preview.js', array( 'customize-preview' ), '20210307', true );
	}

	/**
	 * Embed CSS styles for the theme options in the Customizer
	 *
	 * @return void
	 */
	static function customize_preview_css() {
		wp_enqueue_style( 'maxwell-pro-customizer-css', MAXWELL_PRO_PLUGIN_URL . 'assets/css/customizer.css', array(), '20210212' );
	}
}

// Run Class.
add_action( 'init', array( 'Maxwell_Pro_Customizer', 'setup' ) );
