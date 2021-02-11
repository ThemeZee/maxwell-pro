/**
 * Customizer JS
 *
 * Reloads changes on Theme Customizer Preview asynchronously for better usability
 *
 * @package Maxwell Pro
 */

( function( $ ) {

	/* Header Search checkbox */
	wp.customize( 'maxwell_theme_options[header_search]', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				hideElement( '.primary-navigation-wrap .header-search' );
			} else {
				showElement( '.primary-navigation-wrap .header-search' );
				$( '.primary-navigation-wrap .header-search' ).css( 'position', 'static' );
			}
		} );
	} );

	/* Author Bio checkbox */
	wp.customize( 'maxwell_theme_options[author_bio]', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				hideElement( '.type-post .entry-footer .entry-author' );
			} else {
				showElement( '.type-post .entry-footer .entry-author' );
			}
		} );
	} );

	/* Link & Button Color Option */
	wp.customize( 'maxwell_theme_options[link_color]', function( value ) {
		value.bind( function( newval ) {
			var custom_css, text_color;

			custom_css = 'a:link, a:visited { color: ' + newval + '; }';
			custom_css += 'a:hover, a:focus, a:active { color: #303030; }';
			custom_css += 'button, input[type="button"], input[type="reset"], input[type="submit"], .more-link, .pagination a:hover, .pagination a:active, .pagination .current, .infinite-scroll #infinite-handle span:hover, .tzwb-tabbed-content .tzwb-tabnavi li a:hover, .tzwb-tabbed-content .tzwb-tabnavi li a:active, .tzwb-tabbed-content .tzwb-tabnavi li a.current-tab, .tzwb-social-icons .social-icons-menu li a, .post-slider-controls .zeeflex-direction-nav a, .scroll-to-top-button, .scroll-to-top-button:focus, .scroll-to-top-button:active { background: ' + newval + '; }';

			if( isColorLight( newval ) ) {
				text_color = '#222222';
			} else {
				text_color = '#ffffff';
			}

			custom_css += 'button, input[type="button"], input[type="reset"], input[type="submit"], .more-link, .more-link:link, .more-link:visited, .pagination a:hover, .pagination a:active, .pagination .current, .infinite-scroll #infinite-handle span:hover, .tzwb-tabbed-content .tzwb-tabnavi li a:hover, .tzwb-tabbed-content .tzwb-tabnavi li a:active, .tzwb-tabbed-content .tzwb-tabnavi li a.current-tab, .tzwb-social-icons .social-icons-menu li a, .post-slider-controls .zeeflex-direction-nav a, .scroll-to-top-button, .scroll-to-top-button:focus, .scroll-to-top-button:active { color: ' + text_color + '; }';
			custom_css += 'button:hover, input[type="button"]:hover, input[type="reset"]:hover, input[type="submit"]:hover, button:focus, input[type="button"]:focus, input[type="reset"]:focus, input[type="submit"]:focus, button:active, input[type="button"]:active, input[type="reset"]:active, input[type="submit"]:active, .more-link:hover, .more-link:active, .infinite-scroll #infinite-handle span, .tzwb-social-icons .social-icons-menu li a:hover, .post-slider-controls .zeeflex-direction-nav a:hover, .scroll-to-top-button:hover { color: #ffffff; }';

			addColorStyles( custom_css, 1 );

			custom_css = '.pagination a:hover, .pagination a:active, .tzwb-tabbed-content .tzwb-tabnavi li a:hover, .tzwb-tabbed-content .tzwb-tabnavi li a:active, .tzwb-tabbed-content .tzwb-tabnavi li a.current-tab { color: ' + text_color + '; background: ' + newval + '; }';

			addColorStyles( custom_css, 3 );

			$( '.has-primary-color' ).css( 'color', newval );
			$( '.has-primary-background-color' ).css( 'background-color', newval );
		} );
	} );

	/* Page Background Color Option */
	wp.customize( 'maxwell_theme_options[page_bg_color]', function( value ) {
		value.bind( function( newval ) {
			var custom_css, text_color, hover_color, accent_color, focus_color, border_color, slider_color, bg_color;

			custom_css = '.site, .header-bar, .header-search .header-search-form { background: ' + newval + '; }';

			if( isColorDark( newval ) ) {
				text_color = '#ffffff';
				hover_color = 'rgba(255,255,255,0.5)';
				accent_color = 'rgba(255,255,255,0.75)';
				focus_color = 'rgba(255,255,255,0.25)';
				border_color = 'rgba(255,255,255,0.1)';
				slider_color = 'rgba(255,255,255,0.035)';
				bg_color = '#222222';
			} else {
				text_color = '#222222';
				hover_color = 'rgba(0,0,0,0.5)';
				accent_color = 'rgba(0,0,0,0.75)';
				focus_color = 'rgba(0,0,0,0.25)';
				border_color = 'rgba(0,0,0,0.1)';
				slider_color = 'rgba(0,0,0,0.035)';
				bg_color = '#ffffff';
			}

			custom_css += 'body, input, select, textarea, a:hover, a:focus, a:active, .primary-menu-toggle, .secondary-menu-toggle, .primary-menu-toggle:focus, .secondary-menu-toggle:focus, .post-navigation .nav-links .nav-link-text, .header-bar .social-icons-menu li a, .header-search .header-search-icon, .header-search .header-search-form .header-search-close, .footer-navigation-menu a:link, .footer-navigation-menu a:visited { color: ' + text_color + '; }';
			custom_css += '.primary-menu-toggle .icon, .secondary-menu-toggle .icon, .top-navigation > ul > .menu-item-has-children > a > .icon, .main-navigation > ul > .menu-item-has-children > a > .icon { fill: ' + text_color + '; }';
			custom_css += '.primary-menu-toggle:hover, .primary-menu-toggle:active, .secondary-menu-toggle:hover, .secondary-menu-toggle:active, .entry-meta, .entry-meta a:link, .entry-meta a:visited, .widget_tag_cloud .tagcloud a:link, .widget_tag_cloud .tagcloud a:visited, .entry-tags .meta-tags a:link, .entry-tags .meta-tags a:visited, .post-navigation .nav-links a:hover .nav-link-text, .top-navigation ul a:hover, .top-navigation ul a:active, .header-bar .social-icons-menu li a:hover, .header-search .header-search-icon:hover, .header-search .header-search-icon:active, .header-search .header-search-form .header-search-close:hover, .footer-navigation-menu a:hover, .footer-navigation-menu a:active { color: ' + hover_color + '; }';
			custom_css += '.primary-menu-toggle:hover .icon, .primary-menu-toggle:active .icon, .secondary-menu-toggle:hover .icon, .secondary-menu-toggle:active .icon, .top-navigation > ul > .menu-item-has-children > a:hover > .icon, .main-navigation > ul > .menu-item-has-children > a:hover > .icon { fill: ' + hover_color + '; }';
			custom_css += 'input[type="text"], input[type="email"], input[type="url"], input[type="password"], input[type="search"], textarea, .entry-meta a:hover, .entry-meta a:active { color: ' + accent_color + '; }';
			custom_css += 'input[type="text"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="password"]:focus, input[type="search"]:focus, textarea:focus { color: ' + text_color + '; border: 1px solid ' + focus_color + '; }';
			custom_css += 'pre, th, td, input[type="text"], input[type="email"], input[type="url"], input[type="password"], input[type="search"], textarea, .primary-navigation-wrap, .widget_tag_cloud .tagcloud a, .entry-tags .meta-tags a, .post-navigation, .comment, .footer-wrap, .header-bar, .header-search .header-search-form, .entry-author, .footer-widgets-wrap, .footer-navigation { border-color: ' + border_color + '; }';
			custom_css += '.widget_tag_cloud .tagcloud a:hover, .widget_tag_cloud .tagcloud a:active, .entry-tags .meta-tags a:hover, .entry-tags .meta-tags a:active { border-color: ' + hover_color + '; color: ' + text_color + '; }';
			custom_css += '.post-slider-wrap { background: ' + slider_color + '; }';
			custom_css += 'button:hover, input[type="button"]:hover, input[type="reset"]:hover, input[type="submit"]:hover, button:focus, input[type="button"]:focus, input[type="reset"]:focus, input[type="submit"]:focus, button:active, input[type="button"]:active, input[type="reset"]:active, input[type="submit"]:active, .more-link:hover, .more-link:active, .pagination a, .pagination a:link, .pagination a:visited, .infinite-scroll #infinite-handle span, .tzwb-tabbed-content .tzwb-tabnavi li a:link, .tzwb-tabbed-content .tzwb-tabnavi li a:visited, .tzwb-social-icons .social-icons-menu li a:hover, .tzwb-social-icons .social-icons-menu li a:active, .post-slider-controls .zeeflex-direction-nav a:hover, .scroll-to-top-button:hover { color: ' + bg_color + '; background: ' + text_color + '; }';
			custom_css += '@media only screen and (min-width: 60.001em) { .top-navigation > ul > li > a:link, .top-navigation > ul > li > a:visited, .main-navigation > ul > li > a:link, .main-navigation > ul > li > a:visited { color: ' + text_color + '; } }';
			custom_css += '@media only screen and (min-width: 60.001em) { .top-navigation > ul > li > a:hover, .top-navigation > ul > li > a:active, .main-navigation > ul > li > a:hover, .main-navigation > ul > li > a:active { color: ' + hover_color + '; } }';

			addColorStyles( custom_css, 2 );
		} );
	} );

	/* Top Navigation Color Option */
	wp.customize( 'maxwell_theme_options[top_navi_color]', function( value ) {
		value.bind( function( newval ) {
			var custom_css, text_color, border_color;

			custom_css = '@media only screen and (min-width: 60.001em) { .top-navigation ul ul { background: ' + newval + '; } }';
			custom_css += '@media only screen and (max-width: 60em) { .top-navigation ul, .top-navigation ul ul { background: ' + newval + '; } }';

			if( isColorLight( newval ) ) {
				text_color = '#222222';
				border_color = 'rgba(0,0,0,0.1)';
			} else {
				text_color = '#ffffff';
				border_color = 'rgba(255,255,255,0.1)';
			}

			custom_css += '.top-navigation ul a, .top-navigation ul ul, .top-navigation ul ul li a { border-color: ' + border_color + '; }';
			custom_css += '.top-navigation ul ul a:link, .top-navigation ul ul a:visited { color: ' + text_color + '; }';
			custom_css += '.top-navigation ul .dropdown-toggle .icon, .top-navigation ul ul .menu-item-has-children > a > .icon { fill: ' + text_color + '; }';
			custom_css += '.top-navigation ul ul a:hover, .top-navigation ul ul a:active, .top-navigation ul .dropdown-toggle:hover, .top-navigation ul .dropdown-toggle:active, .top-navigation ul ul .menu-item-has-children > a:hover, .top-navigation ul ul .menu-item-has-children > a:active { background: ' + border_color + '; }';

			custom_css += '@media only screen and (max-width: 60em) { .top-navigation ul a:link, .top-navigation ul a:visited { color: ' + text_color + '; } }';
			custom_css += '@media only screen and (max-width: 60em) { .top-navigation ul a:hover, .top-navigation ul a:active { background: ' + border_color + '; } }';

			addColorStyles( custom_css, 4 );
		} );
	} );

	/* Navigation Color Option */
	wp.customize( 'maxwell_theme_options[navi_color]', function( value ) {
		value.bind( function( newval ) {
			var custom_css, text_color, border_color;

			custom_css = '@media only screen and (min-width: 60.001em) { .main-navigation ul ul { background: ' + newval + '; } .main-navigation ul > li.current-menu-item > a { border-color: ' + newval + '; } }';
			custom_css += '@media only screen and (max-width: 60em) { .main-navigation ul, .main-navigation ul ul { background: ' + newval + '; } .primary-menu-toggle { border-color: ' + newval + '; } }';

			if( isColorLight( newval ) ) {
				text_color = '#222222';
				border_color = 'rgba(0,0,0,0.1)';
			} else {
				text_color = '#ffffff';
				border_color = 'rgba(255,255,255,0.1)';
			}

			custom_css += '.main-navigation ul ul, .main-navigation ul ul a { border-color: ' + border_color + '; }';
			custom_css += '.main-navigation ul ul a:link, .main-navigation ul ul a:visited, .main-navigation ul .submenu-dropdown-toggle { color: ' + text_color + '; }';
			custom_css += '.main-navigation ul ul a:hover, .main-navigation ul ul a:active, .main-navigation ul .submenu-dropdown-toggle:hover, .main-navigation ul .submenu-dropdown-toggle:active { background: ' + border_color + '; }';

			custom_css += '@media only screen and (max-width: 60em) { .main-navigation ul a, .main-navigation ul > li.current-menu-item > a { border-color: ' + border_color + '; } }';
			custom_css += '@media only screen and (max-width: 60em) { .main-navigation ul a:link, .main-navigation ul a:visited { color: ' + text_color + '; } }';
			custom_css += '@media only screen and (max-width: 60em) { .main-navigation ul a:hover, .main-navigation ul a:active { background: ' + border_color + '; } }';

			addColorStyles( custom_css, 5 );
		} );
	} );

	/* Title Color Option */
	wp.customize( 'maxwell_theme_options[title_color]', function( value ) {
		value.bind( function( newval ) {
			$( '.site-title, .site-title a:link, .site-title a:visited, .page-title, .entry-title, .entry-title a:link, .entry-title a:visited' )
				.css( 'color', newval );
		} );
	} );

	/* Widget Title Color Option */
	wp.customize( 'maxwell_theme_options[widget_title_color]', function( value ) {
		value.bind( function( newval ) {
			$( '.widget-title, .widget-title a:link, .widget-title a:visited, .archive-title, .comments-header .comments-title, .comment-reply-title span' )
				.css( 'color', newval );
		} );
	} );

	/* Text Font */
	wp.customize( 'maxwell_theme_options[text_font]', function( value ) {
		value.bind( function( newval ) {

			// Load Font in Customizer.
			loadCustomFont( newval, 'text-font' );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			document.documentElement.style.setProperty( '--text-font', newFont );
		} );
	} );

	/* Title Font */
	wp.customize( 'maxwell_theme_options[title_font]', function( value ) {
		value.bind( function( newval ) {

			// Load Font in Customizer.
			loadCustomFont( newval, 'title-font' );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			document.documentElement.style.setProperty( '--title-font', newFont );
		} );
	} );

	/* Title Font Weight */
	wp.customize( 'maxwell_theme_options[title_is_bold]', function( value ) {
		value.bind( function( newval ) {
			var fontWeight = newval ? 'bold' : 'normal';
			document.documentElement.style.setProperty( '--title-font-weight', fontWeight );
		} );
	} );

	/* Title Text Transform */
	wp.customize( 'maxwell_theme_options[title_is_uppercase]', function( value ) {
		value.bind( function( newval ) {
			var textTransform = newval ? 'uppercase' : 'none';
			document.documentElement.style.setProperty( '--title-text-transform', textTransform );
		} );
	} );

	/* Navi Font */
	wp.customize( 'maxwell_theme_options[navi_font]', function( value ) {
		value.bind( function( newval ) {

			// Load Font in Customizer.
			loadCustomFont( newval, 'navi-font' );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			document.documentElement.style.setProperty( '--navi-font', newFont );
		} );
	} );

	/* Navi Font Weight */
	wp.customize( 'maxwell_theme_options[navi_is_bold]', function( value ) {
		value.bind( function( newval ) {
			var fontWeight = newval ? 'bold' : 'normal';
			document.documentElement.style.setProperty( '--navi-font-weight', fontWeight );
		} );
	} );

	/* Navi Text Transform */
	wp.customize( 'maxwell_theme_options[navi_is_uppercase]', function( value ) {
		value.bind( function( newval ) {
			var textTransform = newval ? 'uppercase' : 'none';
			document.documentElement.style.setProperty( '--navi-text-transform', textTransform );
		} );
	} );

	/* Widget Title Font */
	wp.customize( 'maxwell_theme_options[widget_title_font]', function( value ) {
		value.bind( function( newval ) {

			// Load Font in Customizer.
			loadCustomFont( newval, 'widget-title-font' );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			document.documentElement.style.setProperty( '--widget-title-font', newFont );
		} );
	} );

	/* Widget Title Font Weight */
	wp.customize( 'maxwell_theme_options[widget_title_is_bold]', function( value ) {
		value.bind( function( newval ) {
			var fontWeight = newval ? 'bold' : 'normal';
			document.documentElement.style.setProperty( '--widget-title-font-weight', fontWeight );
		} );
	} );

	/* Widget Title Text Transform */
	wp.customize( 'maxwell_theme_options[widget_title_is_uppercase]', function( value ) {
		value.bind( function( newval ) {
			var textTransform = newval ? 'uppercase' : 'none';
			document.documentElement.style.setProperty( '--widget-title-text-transform', textTransform );
		} );
	} );

	function hideElement( element ) {
		$( element ).css({
			clip: 'rect(1px, 1px, 1px, 1px)',
			position: 'absolute',
			width: '1px',
			height: '1px',
			overflow: 'hidden'
		});
	}

	function showElement( element ) {
		$( element ).css({
			clip: 'auto',
			position: 'relative',
			width: 'auto',
			height: 'auto',
			overflow: 'visible'
		});
	}

	function hexdec( hexString ) {
		hexString = ( hexString + '' ).replace( /[^a-f0-9]/gi, '' );
		return parseInt( hexString, 16 );
	}

	function getColorBrightness( hexColor ) {

		// Remove # string.
		hexColor = hexColor.replace( '#', '' );

		// Convert into RGB.
		var r = hexdec( hexColor.substring( 0, 2 ) );
		var g = hexdec( hexColor.substring( 2, 4 ) );
		var b = hexdec( hexColor.substring( 4, 6 ) );

		return ( ( ( r * 299 ) + ( g * 587 ) + ( b * 114 ) ) / 1000 );
	}

	function isColorLight( hexColor ) {
		return ( getColorBrightness( hexColor ) > 149 );
	}

	function isColorDark( hexColor ) {
		return ( getColorBrightness( hexColor ) <= 149 );
	}

	function writeColorStyles() {
		for( var i = 1; i < 7; i++) {
			$( 'head' ).append( '<style id="maxwell-pro-colors-' + i + '"></style>' );
		}
	}

	function addColorStyles( colorRules, priority ) {

		// Write Color Styles if they do not exist.
		if ( ! $( '#maxwell-pro-colors-1' ).length ) {
			writeColorStyles();
		}

		$( '#maxwell-pro-colors-' + priority ).html( colorRules );
	}

	function loadCustomFont( font, type ) {
		var fontFile = font.split( " " ).join( "+" );
		var fontFileURL = "https://fonts.googleapis.com/css?family=" + fontFile + ":400,700";

		var fontStylesheet = "<link id='maxwell-pro-custom-" + type + "' href='" + fontFileURL + "' rel='stylesheet' type='text/css'>";
		var checkLink = $( "head" ).find( "#maxwell-pro-custom-" + type ).length;

		if (checkLink > 0) {
			$( "head" ).find( "#maxwell-pro-custom-" + type ).remove();
		}
		$( "head" ).append( fontStylesheet );
	}

} )( jQuery );
