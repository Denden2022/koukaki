<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section id="logo" class="banner">
            <video id="background-video" autoplay loop muted>
                <source src="https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DWP+IW_P9+Studio+d'animation/Studio+Koukaki-vide%CC%81o+header+sans+son+(1).mp4" type="video/mp4">
            </video>
            <div class="float-logo">
                <img class="parallax-logo" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            </div>
        </section>

        <section id="story" class="story">
           <article id="story-article" class="story__article"> 
            <div class="title-story">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/purple_title_bg.png'; ?>" alt="Background Image">
            <div class="scroll-title">
                <h1 class="text-story">L'histoire</h1>
            </div>
            </div>
            <div class="story-p">
                <p><?php echo get_theme_mod('story'); ?></p></div>
            </article> 
            
            
            <!--Template des personnages-->
            <?php get_template_part( 'template-parts/content-characters' ); ?>
            
            
            <article id="place" class="anim-clouds">
                <div>
                    <h3>Le Lieu</h3>
                <div class="big-cloud-scroll">
                    <img class="big-cloud" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big_cloud.png'; ?> " alt="big cloud">
                    <img class="little-cloud" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little_cloud.png'; ?> " alt="little cloud">
                </div>    
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
            </article>
        </section>

        <section id="studio" class="anim-titles">
            <div class="background">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/purple_studio_bg.png'; ?>" alt="Background Image">
                <h4 class="text-studio">Studio Koukaki</h4>
            </div>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>

            <!--Template des nominations aux oscars-->
            <?php get_template_part( 'template-parts/content-oscars' ); ?>
	</main><!-- #main -->
    
<?php

get_footer();
