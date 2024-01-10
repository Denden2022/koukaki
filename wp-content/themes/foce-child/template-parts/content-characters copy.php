<?php
/**
 * Template part for displaying characters
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>



        <div class="main-character">
            <h3>Les personnages</h3>    

<!-- les personnages -->

<div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <?php
            $characters = array(
                'Kawaneko' => 'Kawaneko.svg',
                'Orenjiiro' => 'Orenjiiro.svg',
                'Pinku' => 'Pinku.svg',
                'Tenshi' => 'Tenshi.svg',
                'Jaakuna' => 'Jaakuna.svg'
            );

            foreach ($characters as $name => $image) {
                $imagePath = get_stylesheet_directory_uri() . '/assets/images/characters/' . $image;
                echo '<div class="swiper-slide">';
                echo '<img src="' . $imagePath . '" alt="' . $name . '">';
                echo '</div>';
            }
            ?>
        </div>
    </div>
