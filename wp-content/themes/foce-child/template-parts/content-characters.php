<?php
/**
 * Template part for displaying characters
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>

<article id="" class="story__article">
    <p><?php echo get_theme_mod('story'); ?></p>
</article>
           
    <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',
            );
        $characters_query = new WP_Query($args);
    ?>   
        <div class="main-character">
            <h3>Les personnages</h3>
             
    <?php


echo '<div class="swiper-wrapper">';

$main_character = $characters_query->posts[0];

// Première diapositive avec le personnage principal

echo '<div class="swiper-slide">';
echo '<figure>';
echo get_the_post_thumbnail($main_character->ID, 'full');
echo '<figcaption>' . $main_character->post_title . '</figcaption>';
echo '</figure>';
echo '</div>';//fermer le swiper-slide


$characters_query->next_post();
echo '<div class="swiper-wrapper">';
echo '<div class="mySwiper">'; 
 
// Mettez chaque personnage dans une diapositive distincte
while ($characters_query->have_posts()) {
    $characters_query->the_post( );

echo '<div class="swiper-slide">'; 

    echo '<figure>';
    echo get_the_post_thumbnail(get_the_ID(), 'full');
    echo '<figcaption>';
    the_title();
    echo '</figcaption>';
    echo '</figure>';
    echo '</div>';//fermer le swiper-slide
    echo '</div>';
}

echo '</div>'; //fermer swiper-wrapper
echo '</div>';

// Réinitialiser la requête WP
wp_reset_postdata();

?>
</div>
</div>
  <!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</div>
    </div>
