<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/style.css', array(), filemtime(get_stylesheet_directory() . '/style.css'));
    wp_enqueue_style('koukaki-style', get_stylesheet_directory_uri() . '/assets/styles/koukaki.css');
    // Enqueue custom script.js
    wp_enqueue_script('swiper-script', get_stylesheet_directory_uri() . '/js/swiper.js', array('swiper-js'), 1.1, true);
    wp_enqueue_script('menu-script', get_stylesheet_directory_uri() . '/js/menu.js', array('swiper-js'), 1.1, true);
    wp_enqueue_script('animation-script', get_stylesheet_directory_uri() . '/js/animation.js', array('swiper-js'), 1.1, true);
    // Enqueue Swiper CSS
    wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css');
    // Enqueue Swiper JS
    wp_enqueue_script('swiper-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), null, true);
}



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