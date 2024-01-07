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
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>

            <div id="sidenav-id" class="sidenav-class">
            <label for="toggle" id="burger-icon"><img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Burger.svg'; ?>"></label>
            <a class="title-menu" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
            <input type="checkbox" id="toggle">
            <div class="close">
            <ul>
            <li class="site-title"><img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/image-logo.svg'; ?>" <?php echo esc_url( home_url( '/' ) ); ?> rel="home"></a></li>
                <li class="site-story"><a href="#story">Histoire</a></li>
                <li class="site-characters"><a href="#characters">Personnages</a></li>
                <li class="site-place"><a href="#place">Lieu</a></li>
                <li class="site-studio"><a href="#studio">Studio Koukaki</a></li>
            </ul>
            <div class="site-studio-down"><p>STUDIO KOUKAKI</p></div>
</div></div>
            </nav><!-- #site-navigation -->