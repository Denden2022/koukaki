/**
 * effet parallax sur le titre de la vidéo
 */
/*
document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var element = document.querySelector('.parallax-element'); // Sélecteur de votre élément

  // Vous pouvez ajuster cette valeur pour déclencher l'animation à un endroit spécifique lors du défilement
  var triggerPosition = 200;

  if (scrollPosition > triggerPosition) {
    element.classList.add('anim-parallax-logo');
  } else {
    element.classList.remove('anim-parallax-logo');
  }
});*/


/**
 * Au scroll, le logo descend et s'arrête en bas de la vidéo
 */
/*document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var parallaxTitle = document.querySelector('.parallax-title');
  // Appliquez la transformation en fonction de la position de défilement
  parallaxTitle.style.transform = 'translateY(' + (scrollPosition / 2) + 'px)';
});*/

/**
 * transformer le burger en croix lorsque l'on rentre dans le menu
 */
function toggleBurger() {
  var burgerIcon = document.getElementById('burgerIcon');
  var crossIcon = document.getElementById('crossIcon');
  
  // Vérifie si l'image du burger est actuellement active
  if (burgerIcon.classList.contains('active-icon')) {
    // Désactive l'image du burger et active l'image de la croix
      burgerIcon.classList.remove('active-icon');
      crossIcon.classList.add('active-icon');
      // Ajoute une classe pour cacher l'image lorsque le menu est ouvert
  } else {
    // Désactive l'image de la croix et active l'image du burger
      burgerIcon.classList.add('active-icon');
      crossIcon.classList.remove('active-icon');
      // Retire la classe pour montrer l'image lorsque le menu est fermé
  }
}

 /**
 * quand je clique sur un lien du menu, j'arrive sur sa page et le menu se ferme.
 */
document.querySelectorAll('.close ul li a').forEach(link => {
  link.addEventListener('click', () => {
    // Fermer le menu lorsqu'un lien est cliqué
    var toggleCheckbox = document.getElementById('toggle');
    toggleCheckbox.checked = false;
    // Désactiver l'icône de la croix et activer l'icône du burger si nécessaire
    var burgerIcon = document.getElementById('burgerIcon');
    burgerIcon.classList.remove('active-icon');
  });
});

 /**
 * quand je clique sur le menu, les fleurs apparentes de la section oscars disparaissent
 */
 document.querySelectorAll('#burgerIcon').forEach(link => {
  link.addEventListener('click', () => {
    // Désactiver les éléments ::before de la classe .anim-titles et ::after de la classe .oscars-bloc
    var flowerPurple = document.querySelector('.oscars-bloc');
    var flowerPink = document.querySelector('.anim-titles');
    flowerPurple.classList.toggle('menu-open');
    flowerPink.classList.toggle('menu-open');
  });
});


/**
 * mouvement des titres sur fond bleu
 */
  /******animation L'histoire au scroll*****/
  function interceptStory(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('text-story');
      } else {
        entry.target.classList.remove('text-story');
      }
    });
  }
  
  // Création de l'instance IntersectionObserver
  const seeStory = new IntersectionObserver(interceptStory, {
    threshold: 1, // Déclenche la fonction de rappel lorsque 50% du texte est visible
  });
  // Ciblage de l'élément texte à observer
  const targetTextStory = document.querySelector('.text-story');
  // Lancement de l'observation
  seeStory.observe(targetTextStory);


  /****titre Studio koukaki*****/
  //animation Studio koukaki au scroll
// Fonction de rappel pour l'IntersectionObserver
function interceptStudio(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('text-studio');
    } else {
      entry.target.classList.remove('text-studio');
    }
  });
}
// Création de l'instance IntersectionObserver
const seeStudio = new IntersectionObserver(interceptStudio, {
  threshold: 0.5, // Déclenche la fonction de rappel lorsque 50% du texte est visible
});
// Ciblage de l'élément texte à observer
const targetTextStudio = document.querySelector('.text-studio');
// Lancement de l'observation
seeStudio.observe(targetTextStudio);

/**
 * swiper effect coverflow sur les personnages
 */
const mySwiper = new Swiper(".swiper", {
  loop:true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 30,
    stretch: -70,
    slideShadows: false,
  },
});

/**
 * mouvements des nuages au scroll
 */
 // Je cible la class concernée
 function cloudsAnimation() {
 const clouds = document.querySelector('.anim-clouds');

 // A chaque fois que j'ajoute la nouvelle class, j'observe les nuages en mouvement
const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {

   if (entry.isIntersecting) {
     clouds.classList.add('anim-clouds-scroll');
     return;
   }
     clouds.classList.remove('anim-clouds-scroll');
 });
});

observer.observe(document.querySelector('#place'));
}

cloudsAnimation();
