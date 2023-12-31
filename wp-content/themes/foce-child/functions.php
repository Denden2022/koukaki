<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/style.css', array(), filemtime(get_stylesheet_directory() . '/style.css'));
    wp_enqueue_style('koukaki-style', get_stylesheet_directory_uri() . '/assets/styles/koukaki.css');
    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/js/script.js', array( 'jquery' ), 1.1, true);
}

//function enqueue_swiper() {   }
function enqueue_swiper() {
    // Enregistrez le script Swiper.js
    wp_enqueue_script('swiper', get_stylesheet_directory_uri() . '/js/script.js', array(), '1.0', true);
  
    // Enregistrez le fichier CSS Swiper.js
    wp_enqueue_style('swiper-style', get_stylesheet_directory_uri() . '/assets/styles/koukaki.css', array(), '1.0');
  }
  
  add_action('wp_enqueue_scripts', 'enqueue_swiper');

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}