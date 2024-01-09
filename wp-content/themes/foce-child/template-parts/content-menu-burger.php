<?php
/**
 * Template part for displaying menu burger
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>

<nav id="site-navigation" class="main-navigation">
    <div id="sidenav-id" class="sidenav-class">
        <label for="toggle" >
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" id="burger-icon">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
                <img id="burgerIcon" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Burger.svg'; ?>" alt="<?php echo 'burger'; ?> "onclick="toggleBurger()">
            </label>
            
            <!--Titre du menu de navigation-->
            <a class="title-menu" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
            <input type="checkbox" id="toggle">

            <div class="close">
            <ul>
                <li class="site-title"><img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/image-logo.svg'; ?>" <?php echo esc_url( home_url( '/' ) ); ?> rel="home"></li>
                <li class="site-story"><a href="#story">Histoire</a></li>
                <li class="site-characters"><a href="#characters">Personnages</a></li>
                <li class="site-place"><a href="#place">Lieu</a></li>
                <li class="site-studio"><a href="#studio">Studio Koukaki</a></li>
                <li class=site-studio-down><p>STUDIO KOUKAKI</p></li>
            </ul>
            </div>
        </div>
