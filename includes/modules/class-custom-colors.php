<?php
/**
 * Custom Colors
 *
 * Adds color settings to Customizer and generates color CSS code
 *
 * @package Maxwell Pro
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Custom Colors Class
 */
class Maxwell_Pro_Custom_Colors {

	/**
	 * Custom Colors Setup
	 *
	 * @return void
	 */
	static function setup() {

		// Return early if Maxwell Theme is not active.
		if ( ! current_theme_supports( 'maxwell-pro' ) ) {
			return;
		}

		// Add Custom Color CSS code to custom stylesheet output.
		add_filter( 'maxwell_pro_custom_css_stylesheet', array( __CLASS__, 'custom_colors_css' ) );

		// Add Custom Color CSS code to the Gutenberg editor.
		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'custom_editor_colors_css' ) );

		// Add Custom Color Settings.
		add_action( 'customize_register', array( __CLASS__, 'color_settings' ) );
	}

	/**
	 * Adds Color CSS styles in the head area to override default colors
	 *
	 * @param String $custom_css Custom Styling CSS.
	 * @return string CSS code
	 */
	static function custom_colors_css( $custom_css ) {

		// Get Theme Options from Database.
		$theme_options = Maxwell_Pro_Customizer::get_theme_options();

		// Get Default Fonts from settings.
		$default_options = Maxwell_Pro_Customizer::get_default_options();

		// Set Link Color.
		if ( $theme_options['link_color'] !== $default_options['link_color'] ) {

			$custom_css .= '
				/* Link and Button Color Setting */
				a:link,
				a:visited,
				.has-primary-color {
					color: ' . $theme_options['link_color'] . ';
				}

				a:hover,
				a:focus,
				a:active {
					color: #303030;
				}

				button,
				input[type="button"],
				input[type="reset"],
				input[type="submit"],
				.more-link,
				.pagination a:hover,
				.pagination a:active,
				.pagination .current,
				.infinite-scroll #infinite-handle span:hover,
				.tzwb-tabbed-content .tzwb-tabnavi li a:hover,
				.tzwb-tabbed-content .tzwb-tabnavi li a:active,
				.tzwb-tabbed-content .tzwb-tabnavi li a.current-tab,
				.tzwb-social-icons .social-icons-menu li a,
				.post-slider-controls .zeeflex-direction-nav a,
				.scroll-to-top-button,
				.scroll-to-top-button:focus,
				.scroll-to-top-button:active,
				.has-primary-background-color {
					background-color: ' . $theme_options['link_color'] . ';
				}
			';

			// Check if a light background color was chosen.
			if ( self::is_color_light( $theme_options['link_color'] ) ) {
				$custom_css .= '
					button,
					input[type="button"],
					input[type="reset"],
					input[type="submit"],
					.more-link,
					.more-link:link,
					.more-link:visited,
					.pagination a:hover,
					.pagination a:active,
					.pagination .current,
					.infinite-scroll #infinite-handle span:hover,
					.tzwb-tabbed-content .tzwb-tabnavi li a:hover,
					.tzwb-tabbed-content .tzwb-tabnavi li a:active,
					.tzwb-tabbed-content .tzwb-tabnavi li a.current-tab,
					.tzwb-social-icons .social-icons-menu li a,
					.post-slider-controls .zeeflex-direction-nav a,
					.scroll-to-top-button,
					.scroll-to-top-button:focus,
					.scroll-to-top-button:active {
						color: #222;
					}

					button:hover,
					input[type="button"]:hover,
					input[type="reset"]:hover,
					input[type="submit"]:hover,
					button:focus,
					input[type="button"]:focus,
					input[type="reset"]:focus,
					input[type="submit"]:focus,
					button:active,
					input[type="button"]:active,
					input[type="reset"]:active,
					input[type="submit"]:active,
					.more-link:hover,
					.more-link:active,
					.infinite-scroll #infinite-handle span,
					.tzwb-social-icons .social-icons-menu li a:hover,
					.post-slider-controls .zeeflex-direction-nav a:hover,
					.scroll-to-top-button:hover {
						color: #fff;
					}
				';
			} // End if().
		} // End if().

		// Set Page Background Color.
		if ( $theme_options['page_bg_color'] !== $default_options['page_bg_color'] ) {

			$custom_css .= '
				/* Page Background Color Setting */
				.site,
				.header-bar,
				.header-search .header-search-form {
					background: ' . $theme_options['page_bg_color'] . ';
				}
			';

			// Check if a dark background color was chosen.
			if ( self::is_color_dark( $theme_options['page_bg_color'] ) ) {
				$custom_css .= '
					body,
					input,
					select,
					textarea,
					a:hover,
					a:focus,
					a:active,
					.primary-menu-toggle,
					.secondary-menu-toggle,
					.primary-menu-toggle:focus,
					.secondary-menu-toggle:focus,
					.post-navigation .nav-links .nav-link-text,
					.header-bar .social-icons-menu li a,
					.header-search .header-search-icon,
					.header-search .header-search-form .header-search-close,
					.footer-navigation-menu a:link,
					.footer-navigation-menu a:visited {
						color: #fff;
					}

					.primary-menu-toggle .icon,
					.secondary-menu-toggle .icon,
					.top-navigation > ul > .menu-item-has-children > a > .icon,
					.main-navigation > ul > .menu-item-has-children > a > .icon {
						fill: #fff;
					}

					.primary-menu-toggle:hover,
					.primary-menu-toggle:active,
					.secondary-menu-toggle:hover,
					.secondary-menu-toggle:active,
					.entry-meta,
					.entry-meta a:link,
					.entry-meta a:visited,
					.widget_tag_cloud .tagcloud a:link,
					.widget_tag_cloud .tagcloud a:visited,
					.entry-tags .meta-tags a:link,
					.entry-tags .meta-tags a:visited,
					.post-navigation .nav-links a:hover .nav-link-text,
					.header-bar .social-icons-menu li a:hover,
					.header-search .header-search-icon:hover,
					.header-search .header-search-icon:active,
					.header-search .header-search-form .header-search-close:hover,
					.footer-navigation-menu a:hover,
					.footer-navigation-menu a:active {
						color: rgba(255,255,255,0.5);
					}

					.primary-menu-toggle:hover .icon,
					.primary-menu-toggle:active .icon,
					.secondary-menu-toggle:hover .icon,
					.secondary-menu-toggle:active .icon,
					.top-navigation > ul > .menu-item-has-children > a:hover > .icon,
					.main-navigation > ul > .menu-item-has-children > a:hover > .icon {
						fill: rgba(255,255,255,0.5);
					}

					@media only screen and (min-width: 60.001em) {
						.top-navigation > ul > li > a,
						.top-navigation > ul > li > a:link,
						.top-navigation > ul > li > a:visited,
						.main-navigation > ul > li > a,
						.main-navigation > ul > li > a:link,
						.main-navigation > ul > li > a:visited {
							color: #fff;
						}
						
						.top-navigation > ul > li > a:hover,
						.top-navigation > ul > li > a:active,
						.main-navigation > ul > li > a:hover,
						.main-navigation > ul > li > a:active {
							color: rgba(255,255,255,0.5);
						}
					}	

					input[type="text"],
					input[type="email"],
					input[type="url"],
					input[type="password"],
					input[type="search"],
					textarea,
					.entry-meta a:hover,
					.entry-meta a:active {
						color: rgba(255,255,255,0.75);
					}

					input[type="text"]:focus,
					input[type="email"]:focus,
					input[type="url"]:focus,
					input[type="password"]:focus,
					input[type="search"]:focus,
					textarea:focus {
						border: 1px solid rgba(255,255,255,0.25);
						color: #fff;
					}

					pre,
					th,
					td,
					input[type="text"],
					input[type="email"],
					input[type="url"],
					input[type="password"],
					input[type="search"],
					textarea,
					.primary-navigation-wrap,
					.widget_tag_cloud .tagcloud a,
					.entry-tags .meta-tags a,
					.post-navigation,
					.comment,
					.footer-wrap,
					.header-bar,
					.header-search .header-search-form,
					.entry-author,
					.footer-widgets-wrap,
					.footer-navigation {
						border-color: rgba(255,255,255,0.1);
					}

					.widget_tag_cloud .tagcloud a:hover,
					.widget_tag_cloud .tagcloud a:active,
					.entry-tags .meta-tags a:hover,
					.entry-tags .meta-tags a:active {
						border-color: rgba(255,255,255,0.5);
						color: #fff;
					}

					.post-slider-wrap {
						background: rgba(255,255,255,0.035);
					}

					button:hover,
					input[type="button"]:hover,
					input[type="reset"]:hover,
					input[type="submit"]:hover,
					button:focus,
					input[type="button"]:focus,
					input[type="reset"]:focus,
					input[type="submit"]:focus,
					button:active,
					input[type="button"]:active,
					input[type="reset"]:active,
					input[type="submit"]:active,
					.more-link:hover,
					.more-link:active,
					.pagination a,
					.pagination a:link,
					.pagination a:visited,
					.infinite-scroll #infinite-handle span,
					.tzwb-tabbed-content .tzwb-tabnavi li a:link,
					.tzwb-tabbed-content .tzwb-tabnavi li a:visited,
					.tzwb-social-icons .social-icons-menu li a:hover,
					.tzwb-social-icons .social-icons-menu li a:active,
					.post-slider-controls .zeeflex-direction-nav a:hover,
					.scroll-to-top-button:hover {
						color: #222;
						background: #fff;
					}
				';
			} // End if().
		} // End if().

		// Set Link Color 2.
		if ( $theme_options['link_color'] !== $default_options['link_color'] ) {

			$custom_css .= '
				.pagination a:hover,
				.pagination a:active,
				.tzwb-tabbed-content .tzwb-tabnavi li a:hover,
				.tzwb-tabbed-content .tzwb-tabnavi li a:active,
				.tzwb-tabbed-content .tzwb-tabnavi li a.current-tab {
					color: #fff;
					background: ' . $theme_options['link_color'] . ';
				}
			';

			// Check if a light background color was chosen.
			if ( self::is_color_light( $theme_options['link_color'] ) ) {
				$custom_css .= '
					.pagination a:hover,
					.pagination a:active,
					.tzwb-tabbed-content .tzwb-tabnavi li a:hover,
					.tzwb-tabbed-content .tzwb-tabnavi li a:active,
					.tzwb-tabbed-content .tzwb-tabnavi li a.current-tab {
						color: #222;
					}
				';
			} // End if().
		} // End if().

		// Set Top Navigation Color.
		if ( $theme_options['top_navi_color'] !== $default_options['top_navi_color'] ) {

			$custom_css .= '
				/* Top Navigation Color Setting */
				@media only screen and (min-width: 60.001em) {
					.top-navigation ul ul {
						background: ' . $theme_options['top_navi_color'] . ';
					}
				}

				@media only screen and (max-width: 60em) {
					.top-navigation ul,
					.top-navigation ul ul {
						background: ' . $theme_options['top_navi_color'] . ';
					}
				}
			';

			// Check if a light background color was chosen.
			if ( self::is_color_light( $theme_options['top_navi_color'] ) ) {
				$custom_css .= '
					.top-navigation ul a,
					.top-navigation ul ul,
					.top-navigation ul ul li a {
						border-color: rgba(0,0,0,0.1);
					}

					.top-navigation ul ul a,
					.top-navigation ul ul a:link,
					.top-navigation ul ul a:visited {
						color: #222;
					}
					
					.top-navigation ul .dropdown-toggle .icon,
					.top-navigation ul ul .menu-item-has-children > a > .icon {
					    fill: #222;
					}

					.top-navigation ul ul a:hover,
					.top-navigation ul ul a:active,
					.top-navigation ul .dropdown-toggle:hover,
					.top-navigation ul .dropdown-toggle:active,
					.top-navigation ul ul .menu-item-has-children > a:hover,
					.top-navigation ul ul .menu-item-has-children > a:active {
						background: rgba(0,0,0,0.1);
					}

					@media only screen and (max-width: 60em) {
						.top-navigation ul a,
						.top-navigation ul a:link,
						.top-navigation ul a:visited {
							color: #222;
						}

						.top-navigation ul a:hover,
						.top-navigation ul a:active {
							background: rgba(0,0,0,0.1);
						}
					}
				';
			}
		} // End if().

		// Set Primary Navigation Color.
		if ( $theme_options['navi_color'] !== $default_options['navi_color'] ) {

			$custom_css .= '
				/* Main Navigation Color Setting */
				@media only screen and (min-width: 60.001em) {
					.main-navigation ul ul {
						background: ' . $theme_options['navi_color'] . ';
					}

					.main-navigation ul > li.current-menu-item > a {
						border-color: ' . $theme_options['navi_color'] . ';
					}
				}

				@media only screen and (max-width: 60em) {
					.primary-menu-toggle {
						border-color: ' . $theme_options['navi_color'] . ';
					}

					.main-navigation ul,
					.main-navigation ul ul {
						background: ' . $theme_options['navi_color'] . ';
					}
				}
			';

			// Check if a light background color was chosen.
			if ( self::is_color_light( $theme_options['navi_color'] ) ) {
				$custom_css .= '
					.main-navigation ul ul,
					.main-navigation ul ul a {
						border-color: rgba(0,0,0,0.1);
					}

					.main-navigation ul ul a,
					.main-navigation ul ul a:link,
					.main-navigation ul ul a:visiteds {
						color: #222;
					}

					.main-navigation ul ul a:hover,
					.main-navigation ul ul a:active,
					.main-navigation .dropdown-toggle:hover,
					.main-navigation .dropdown-toggle:active,
					.main-navigation ul .menu-item-has-children > a:hover,
					.main-navigation ul .menu-item-has-children > a:active {
						background: rgba(0,0,0,0.1);
					}

					.main-navigation .dropdown-toggle .icon,
					.main-navigation ul .menu-item-has-children > a > .icon {
					    fill: #222;
					}

					@media only screen and (max-width: 60em) {
						.main-navigation ul a,
						.main-navigation ul > li.current-menu-item > a {
							border-color: rgba(0,0,0,0.1);
						}

						.main-navigation ul a,
						.main-navigation ul a:link,
						.main-navigation ul a:visited {
							color: #222;
						}

						.main-navigation ul a:hover,
						.main-navigation ul a:active {
							background: rgba(0,0,0,0.1);
						}
					}
				';
			}
		}

		// Set Title Color.
		if ( $theme_options['title_color'] !== $default_options['title_color'] ) {

			$custom_css .= '
				/* Post Titles Primary Color Setting */
				.site-title,
				.site-title a:link,
				.site-title a:visited,
				.page-title,
				.entry-title,
				.entry-title a:link,
				.entry-title a:visited {
					color: ' . $theme_options['title_color'] . ';
				}
			';
		}

		// Set Widget Title Color.
		if ( $theme_options['widget_title_color'] !== $default_options['widget_title_color'] ) {

			$custom_css .= '
				/* Widget Titles Color Setting */
				.widget-title,
				.widget-title a:link,
				.widget-title a:visited,
				.archive-title,
				.comments-header .comments-title,
				.comment-reply-title span {
					color: ' . $theme_options['widget_title_color'] . ';
				}
			';
		}

		return $custom_css;
	}

	/**
	 * Adds Color CSS styles in the Gutenberg Editor to override default colors
	 *
	 * @return void
	 */
	static function custom_editor_colors_css() {

		// Get Theme Options from Database.
		$theme_options = Maxwell_Pro_Customizer::get_theme_options();

		// Get Default Fonts from settings.
		$default_options = Maxwell_Pro_Customizer::get_default_options();

		// Set Primary Color.
		if ( $theme_options['link_color'] !== $default_options['link_color'] ) {

			$custom_css = '
				.has-primary-color,
				.edit-post-visual-editor .editor-block-list__block a {
					color: ' . $theme_options['link_color'] . ';
				}
				.has-primary-background-color {
					background-color: ' . $theme_options['link_color'] . ';
				}
			';

			wp_add_inline_style( 'maxwell-editor-styles', $custom_css );
		}
	}

	/**
	 * Change primary color in Gutenberg Editor.
	 *
	 * @return array $editor_settings
	 */
	static function change_primary_color( $color ) {
		// Get Theme Options from Database.
		$theme_options = Maxwell_Pro_Customizer::get_theme_options();

		// Get Default Fonts from settings.
		$default_options = Maxwell_Pro_Customizer::get_default_options();

		// Set Primary Color.
		if ( $theme_options['link_color'] !== $default_options['link_color'] ) {
			$color = $theme_options['link_color'];
		}

		return $color;
	}

	/**
	 * Adds all color settings in the Customizer
	 *
	 * @param object $wp_customize / Customizer Object.
	 */
	static function color_settings( $wp_customize ) {

		// Add Section for Theme Colors.
		$wp_customize->add_section( 'maxwell_pro_section_colors', array(
			'title'    => __( 'Theme Colors', 'maxwell-pro' ),
			'priority' => 60,
			'panel'    => 'maxwell_options_panel',
		) );

		// Get Default Colors from settings.
		$default_options = Maxwell_Pro_Customizer::get_default_options();

		// Add Page Background Color setting.
		$wp_customize->add_setting( 'maxwell_theme_options[page_bg_color]', array(
			'default'           => $default_options['page_bg_color'],
			'type'              => 'option',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_hex_color',
		) );
		$wp_customize->add_control( new WP_Customize_Color_Control(
			$wp_customize, 'maxwell_theme_options[page_bg_color]', array(
				'label'    => esc_html_x( 'Page Background', 'color setting', 'maxwell-pro' ),
				'section'  => 'maxwell_pro_section_colors',
				'settings' => 'maxwell_theme_options[page_bg_color]',
				'priority' => 10,
			)
		) );

		// Add Link and Button Color setting.
		$wp_customize->add_setting( 'maxwell_theme_options[link_color]', array(
			'default'           => $default_options['link_color'],
			'type'              => 'option',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_hex_color',
		) );
		$wp_customize->add_control( new WP_Customize_Color_Control(
			$wp_customize, 'maxwell_theme_options[link_color]', array(
				'label'    => esc_html_x( 'Links and Buttons', 'color setting', 'maxwell-pro' ),
				'section'  => 'maxwell_pro_section_colors',
				'settings' => 'maxwell_theme_options[link_color]',
				'priority' => 20,
			)
		) );

		// Add Top Navigation Color setting.
		$wp_customize->add_setting( 'maxwell_theme_options[top_navi_color]', array(
			'default'           => $default_options['top_navi_color'],
			'type'              => 'option',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_hex_color',
		) );
		$wp_customize->add_control( new WP_Customize_Color_Control(
			$wp_customize, 'maxwell_theme_options[top_navi_color]', array(
				'label'    => esc_html_x( 'Top Navigation', 'color setting', 'maxwell-pro' ),
				'section'  => 'maxwell_pro_section_colors',
				'settings' => 'maxwell_theme_options[top_navi_color]',
				'priority' => 30,
			)
		) );

		// Add Navigation Primary Color setting.
		$wp_customize->add_setting( 'maxwell_theme_options[navi_color]', array(
			'default'           => $default_options['navi_color'],
			'type'              => 'option',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_hex_color',
		) );
		$wp_customize->add_control( new WP_Customize_Color_Control(
			$wp_customize, 'maxwell_theme_options[navi_color]', array(
				'label'    => esc_html_x( 'Main Navigation', 'color setting', 'maxwell-pro' ),
				'section'  => 'maxwell_pro_section_colors',
				'settings' => 'maxwell_theme_options[navi_color]',
				'priority' => 40,
			)
		) );

		// Add Navigation Secondary Color setting.
		$wp_customize->add_setting( 'maxwell_theme_options[title_color]', array(
			'default'           => $default_options['title_color'],
			'type'              => 'option',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_hex_color',
		) );
		$wp_customize->add_control( new WP_Customize_Color_Control(
			$wp_customize, 'maxwell_theme_options[title_color]', array(
				'label'    => esc_html_x( 'Post Titles', 'color setting', 'maxwell-pro' ),
				'section'  => 'maxwell_pro_section_colors',
				'settings' => 'maxwell_theme_options[title_color]',
				'priority' => 50,
			)
		) );

		// Add Widget Title Color setting.
		$wp_customize->add_setting( 'maxwell_theme_options[widget_title_color]', array(
			'default'           => $default_options['widget_title_color'],
			'type'              => 'option',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_hex_color',
		) );
		$wp_customize->add_control( new WP_Customize_Color_Control(
			$wp_customize, 'maxwell_theme_options[widget_title_color]', array(
				'label'    => esc_html_x( 'Widget Titles', 'color setting', 'maxwell-pro' ),
				'section'  => 'maxwell_pro_section_colors',
				'settings' => 'maxwell_theme_options[widget_title_color]',
				'priority' => 60,
			)
		) );
	}

	/**
	 * Returns color brightness.
	 *
	 * @param int Number of brightness.
	 */
	static function get_color_brightness( $hex_color ) {

		// Remove # string.
		$hex_color = str_replace( '#', '', $hex_color );

		// Convert into RGB.
		$r = hexdec( substr( $hex_color, 0, 2 ) );
		$g = hexdec( substr( $hex_color, 2, 2 ) );
		$b = hexdec( substr( $hex_color, 4, 2 ) );

		return ( ( ( $r * 299 ) + ( $g * 587 ) + ( $b * 114 ) ) / 1000 );
	}

	/**
	 * Check if the color is light.
	 *
	 * @param bool True if color is light.
	 */
	static function is_color_light( $hex_color ) {
		return ( self::get_color_brightness( $hex_color ) > 149 );
	}

	/**
	 * Check if the color is dark.
	 *
	 * @param bool True if color is dark.
	 */
	static function is_color_dark( $hex_color ) {
		return ( self::get_color_brightness( $hex_color ) <= 149 );
	}
}

// Run Class.
add_action( 'init', array( 'Maxwell_Pro_Custom_Colors', 'setup' ) );
add_filter( 'maxwell_primary_color', array( 'Maxwell_Pro_Custom_Colors', 'change_primary_color' ) );
