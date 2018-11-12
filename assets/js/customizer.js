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

			custom_css += 'body, input, select, textarea, a:hover, a:focus, a:active, .main-navigation-menu a:link, .main-navigation-menu a:visited, .main-navigation-toggle, .post-navigation .nav-links .nav-link-text, .top-navigation-menu a:link, .top-navigation-menu a:visited, .header-bar .social-icons-menu li a, .header-search .header-search-icon, .header-search .header-search-form .header-search-close, .footer-navigation-menu a:link, .footer-navigation-menu a:visited { color: ' + text_color + '; }';
			custom_css += '.main-navigation-menu a:hover, .main-navigation-menu a:active, .main-navigation-toggle:hover, .main-navigation-toggle:active, .entry-meta, .entry-meta a:link, .entry-meta a:visited, .widget_tag_cloud .tagcloud a:link, .widget_tag_cloud .tagcloud a:visited, .entry-tags .meta-tags a:link, .entry-tags .meta-tags a:visited, .post-navigation .nav-links a:hover .nav-link-text, .top-navigation-menu a:hover, .top-navigation-menu a:active, .header-bar .social-icons-menu li a:hover, .header-search .header-search-icon:hover, .header-search .header-search-icon:active, .header-search .header-search-form .header-search-close:hover, .footer-navigation-menu a:hover, .footer-navigation-menu a:active { color: ' + hover_color + '; }';
			custom_css += 'input[type="text"], input[type="email"], input[type="url"], input[type="password"], input[type="search"], textarea, .entry-meta a:hover, .entry-meta a:active { color: ' + accent_color + '; }';
			custom_css += 'input[type="text"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="password"]:focus, input[type="search"]:focus, textarea:focus { color: ' + text_color + '; border: 1px solid ' + focus_color + '; }';
			custom_css += 'pre, th, td, input[type="text"], input[type="email"], input[type="url"], input[type="password"], input[type="search"], textarea, .primary-navigation-wrap, .widget_tag_cloud .tagcloud a, .entry-tags .meta-tags a, .post-navigation, .comment, .footer-wrap, .header-bar, .header-search .header-search-form, .entry-author, .footer-widgets-wrap, .footer-navigation { border-color: ' + border_color + '; }';
			custom_css += '.widget_tag_cloud .tagcloud a:hover, .widget_tag_cloud .tagcloud a:active, .entry-tags .meta-tags a:hover, .entry-tags .meta-tags a:active { border-color: ' + hover_color + '; color: ' + text_color + '; }';
			custom_css += '.post-slider-wrap { background: ' + slider_color + '; }';
			custom_css += 'button:hover, input[type="button"]:hover, input[type="reset"]:hover, input[type="submit"]:hover, button:focus, input[type="button"]:focus, input[type="reset"]:focus, input[type="submit"]:focus, button:active, input[type="button"]:active, input[type="reset"]:active, input[type="submit"]:active, .more-link:hover, .more-link:active, .pagination a, .pagination a:link, .pagination a:visited, .infinite-scroll #infinite-handle span, .tzwb-tabbed-content .tzwb-tabnavi li a:link, .tzwb-tabbed-content .tzwb-tabnavi li a:visited, .tzwb-social-icons .social-icons-menu li a:hover, .tzwb-social-icons .social-icons-menu li a:active, .post-slider-controls .zeeflex-direction-nav a:hover, .scroll-to-top-button:hover { color: ' + bg_color + '; background: ' + text_color + '; }';

			addColorStyles( custom_css, 2 );
		} );
	} );

	/* Top Navigation Color Option */
	wp.customize( 'maxwell_theme_options[top_navi_color]', function( value ) {
		value.bind( function( newval ) {
			var custom_css, text_color, border_color;

			custom_css = '@media only screen and (min-width: 60.001em) { .top-navigation-menu ul { background: ' + newval + '; } }';
			custom_css += '@media only screen and (max-width: 60em) { .top-navigation-menu, .top-navigation-menu ul { background: ' + newval + '; } }';

			if( isColorLight( newval ) ) {
				text_color = '#222222';
				border_color = 'rgba(0,0,0,0.1)';
			} else {
				text_color = '#ffffff';
				border_color = 'rgba(255,255,255,0.1)';
			}

			custom_css += '.top-navigation-menu a, .top-navigation-menu ul, .top-navigation-menu ul a { border-color: ' + border_color + '; }';
			custom_css += '.top-navigation-menu ul a:link, .top-navigation-menu ul a:visited, .top-navigation-menu .submenu-dropdown-toggle { color: ' + text_color + '; }';
			custom_css += '.top-navigation-menu ul a:hover, .top-navigation-menu ul a:active, .top-navigation-menu .submenu-dropdown-toggle:hover, .top-navigation-menu .submenu-dropdown-toggle:active { background: ' + border_color + '; }';

			custom_css += '@media only screen and (max-width: 60em) { .top-navigation-menu a:link, .top-navigation-menu a:visited { color: ' + text_color + '; } }';
			custom_css += '@media only screen and (max-width: 60em) { .top-navigation-menu a:hover, .top-navigation-menu a:active { background: ' + border_color + '; } }';

			addColorStyles( custom_css, 4 );
		} );
	} );

	/* Navigation Color Option */
	wp.customize( 'maxwell_theme_options[navi_color]', function( value ) {
		value.bind( function( newval ) {
			var custom_css, text_color, border_color;

			custom_css = '@media only screen and (min-width: 60.001em) { .main-navigation-menu ul { background: ' + newval + '; } .main-navigation-menu > li.current-menu-item > a { border-color: ' + newval + '; } }';
			custom_css += '@media only screen and (max-width: 60em) { .main-navigation-menu, .main-navigation-menu ul { background: ' + newval + '; } .main-navigation-toggle { border-color: ' + newval + '; } }';

			if( isColorLight( newval ) ) {
				text_color = '#222222';
				border_color = 'rgba(0,0,0,0.1)';
			} else {
				text_color = '#ffffff';
				border_color = 'rgba(255,255,255,0.1)';
			}

			custom_css += '.main-navigation-menu ul, .main-navigation-menu ul a { border-color: ' + border_color + '; }';
			custom_css += '.main-navigation-menu ul a:link, .main-navigation-menu ul a:visited, .main-navigation-menu .submenu-dropdown-toggle { color: ' + text_color + '; }';
			custom_css += '.main-navigation-menu ul a:hover, .main-navigation-menu ul a:active, .main-navigation-menu .submenu-dropdown-toggle:hover, .main-navigation-menu .submenu-dropdown-toggle:active { background: ' + border_color + '; }';

			custom_css += '@media only screen and (max-width: 60em) { .main-navigation-menu a, .main-navigation-menu > li.current-menu-item > a { border-color: ' + border_color + '; } }';
			custom_css += '@media only screen and (max-width: 60em) { .main-navigation-menu a:link, .main-navigation-menu a:visited { color: ' + text_color + '; } }';
			custom_css += '@media only screen and (max-width: 60em) { .main-navigation-menu a:hover, .main-navigation-menu a:active { background: ' + border_color + '; } }';

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

	/* Theme Fonts */
	wp.customize( 'maxwell_theme_options[text_font]', function( value ) {
		value.bind( function( newval ) {

			// Embed Font.
			var fontFamilyUrl = newval.split( " " ).join( "+" );
			var googleFontPath = "https://fonts.googleapis.com/css?family=" + fontFamilyUrl + ":400,700";
			var googleFontSource = "<link id='maxwell-pro-custom-text-font' href='" + googleFontPath + "' rel='stylesheet' type='text/css'>";
			var checkLink = $( "head" ).find( "#maxwell-pro-custom-text-font" ).length;

			if (checkLink > 0) {
				$( "head" ).find( "#maxwell-pro-custom-text-font" ).remove();
			}
			$( "head" ).append( googleFontSource );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			$( 'body, button, input, select, textarea' )
				.css( 'font-family', newFont );

		} );
	} );

	wp.customize( 'maxwell_theme_options[title_font]', function( value ) {
		value.bind( function( newval ) {

			// Embed Font.
			var fontFamilyUrl = newval.split( " " ).join( "+" );
			var googleFontPath = "https://fonts.googleapis.com/css?family=" + fontFamilyUrl + ":400,700";
			var googleFontSource = "<link id='maxwell-pro-custom-title-font' href='" + googleFontPath + "' rel='stylesheet' type='text/css'>";
			var checkLink = $( "head" ).find( "#maxwell-pro-custom-title-font" ).length;

			if (checkLink > 0) {
				$( "head" ).find( "#maxwell-pro-custom-title-font" ).remove();
			}
			$( "head" ).append( googleFontSource );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			$( '.site-title, .page-title, .entry-title' )
				.css( 'font-family', newFont );

		} );
	} );

	wp.customize( 'maxwell_theme_options[navi_font]', function( value ) {
		value.bind( function( newval ) {

			// Embed Font.
			var fontFamilyUrl = newval.split( " " ).join( "+" );
			var googleFontPath = "https://fonts.googleapis.com/css?family=" + fontFamilyUrl + ":400,700";
			var googleFontSource = "<link id='maxwell-pro-custom-navi-font' href='" + googleFontPath + "' rel='stylesheet' type='text/css'>";
			var checkLink = $( "head" ).find( "#maxwell-pro-custom-navi-font" ).length;

			if (checkLink > 0) {
				$( "head" ).find( "#maxwell-pro-custom-navi-font" ).remove();
			}
			$( "head" ).append( googleFontSource );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			$( '.top-navigation-menu a, .main-navigation-menu a, .footer-navigation-menu a' )
				.css( 'font-family', newFont );

		} );
	} );

	wp.customize( 'maxwell_theme_options[widget_title_font]', function( value ) {
		value.bind( function( newval ) {

			// Embed Font.
			var fontFamilyUrl = newval.split( " " ).join( "+" );
			var googleFontPath = "https://fonts.googleapis.com/css?family=" + fontFamilyUrl + ":400,700";
			var googleFontSource = "<link id='maxwell-pro-custom-widget-title-font' href='" + googleFontPath + "' rel='stylesheet' type='text/css'>";
			var checkLink = $( "head" ).find( "#maxwell-pro-custom-widget-title-font" ).length;

			if (checkLink > 0) {
				$( "head" ).find( "#maxwell-pro-custom-widget-title-font" ).remove();
			}
			$( "head" ).append( googleFontSource );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			$( '.widget-title, .archive-title, .comments-header .comments-title, .comment-reply-title span' )
				.css( 'font-family', newFont );

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

} )( jQuery );
