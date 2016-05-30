<?php
/***
 * Header Spacing
 *
 * Adds header spacing settings and CSS
 *
 * @package Maxwell Pro
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;


// Use class to avoid namespace collisions
if ( ! class_exists( 'Maxwell_Pro_Header_Spacing' ) ) :

class Maxwell_Pro_Header_Spacing {

	/**
	 * Site Logo Setup
	 *
	 * @return void
	*/
	static function setup() {
		
		// Return early if Maxwell Theme is not active
		if ( ! current_theme_supports( 'maxwell-pro'  ) ) {
			return;
		}
		
		// Add Custom Spacing CSS code to custom stylesheet output
		add_filter( 'maxwell_pro_custom_css_stylesheet', array( __CLASS__, 'custom_spacing_css' ) ); 
		
		// Add Site Logo Settings
		add_action( 'customize_register', array( __CLASS__, 'header_settings' ) );
	}
	
	/**
	 * Adds custom Margin CSS styling for the logo and navigation spacing
	 *
	 */
	static function custom_spacing_css( $custom_css ) { 
		
		// Get Theme Options from Database
		$theme_options = Maxwell_Pro_Customizer::get_theme_options();

		// Set CSS Variable
		$spacing_css = '';
		
		// Set Header Spacing
		if ( $theme_options['header_spacing'] <> 30 ) { 
		
			$margin = $theme_options['header_spacing'] / 10;
		
			$spacing_css .= '
				@media only screen and (min-width: 85em) {
					
					.header-main {
						padding: '. $margin .'em 0;
					}
				
				}
				';
		
		}
		
		// Set Logo Spacing
		if ( $theme_options['logo_spacing'] <> 0 ) { 
		
			$margin = $theme_options['logo_spacing'] / 10;
		
			$spacing_css .= '
				.site-branding {
					margin: '. $margin .'em 0;
				}
				';
				
		}
		
		// Add Spacing CSS to existing CSS code
		$custom_css .= $spacing_css;
		
		return $custom_css;
		
	}
	
	/**
	 * Adds site logo settings
	 *
	 * @param object $wp_customize / Customizer Object
	 */
	static function header_settings( $wp_customize ) {

		// Add Section for Header Settings
		$wp_customize->add_section( 'maxwell_pro_section_header', array(
			'title'    => __( 'Header Settings', 'maxwell-pro' ),
			'priority' => 20,
			'panel' => 'maxwell_options_panel' 
			)
		);
			
		// Add Header Spacing setting
		$wp_customize->add_setting( 'maxwell_theme_options[header_spacing]', array(
			'default'           => 30,
			'type'           	=> 'option',
			'transport'         => 'refresh',
			'sanitize_callback' => 'absint'
			)
		);
		$wp_customize->add_control( 'maxwell_theme_options[header_spacing]', array(
			'label'    => __( 'Header Spacing (default: 30)', 'maxwell-pro' ),
			'section'  => 'maxwell_pro_section_header',
			'settings' => 'maxwell_theme_options[header_spacing]',
			'type'     => 'text',
			'priority' => 10
			)
		);
		
		// Add Logo Spacing setting
		$wp_customize->add_setting( 'maxwell_theme_options[logo_spacing]', array(
			'default'           => 0,
			'type'           	=> 'option',
			'transport'         => 'refresh',
			'sanitize_callback' => 'absint'
			)
		);
		$wp_customize->add_control( 'maxwell_theme_options[logo_spacing]', array(
			'label'    => __( 'Logo Spacing (default: 0)', 'maxwell-pro' ),
			'section'  => 'maxwell_pro_section_header',
			'settings' => 'maxwell_theme_options[logo_spacing]',
			'type'     => 'text',
			'priority' => 20
			)
		);

	}

}

// Run Class
add_action( 'init', array( 'Maxwell_Pro_Header_Spacing', 'setup' ) );

endif;