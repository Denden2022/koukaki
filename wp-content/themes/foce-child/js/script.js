/**
 * effet parallax sur le titre de la vidéo
 */
const parallaxTitleVideo = document.querySelector('.parallax-title');

  // A chaque fois que j'ajoute la nouvelle class, j'observe les nuages en mouvement
const seeParallax = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      parallaxTitleVideo.classList.add('anim-parallax-video');
      return;
    }
      parallaxTitleVideo.classList.remove('anim-parallax-video');
  });
});
seeParallax.observe(document.querySelector('#background-video'));

/**
 * mouvements des nuages au scroll
 */
 // Je cible la class concernée
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

/*animation story au scroll
  // Je cible la class concernée
  const titleStory = document.querySelector('.story');

  // A chaque fois que j'ajoute la nouvelle class, j'observe le titre story au scroll
const seeStory = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      titleStory.classList.add('anim-story-scroll');
      return;
    }
      titleStory.classList.remove('anim-story-scroll');
  });
});

seeStory.observe(document.querySelector('#story'));*/


/**
 * mouvement des titres sur fond bleu
 */
  //titre L'histoire
document.addEventListener('DOMContentLoaded', function () {
  const backgroundStory = document.querySelector('.story');
  const textStory = document.querySelector('.title-story h1');
  let animationEnabled = false;
  
  const enableAnimation = () => {
    if (!animationEnabled) {
        textStory.classList.add('animate-text-story');
        animationEnabled = true;
    }
  };

  backgroundStory.addEventListener('mouseover', enableAnimation);
  
  });

  //titre Studio koukaki
const background = document.querySelector('#studio .background');
const text = document.querySelector('#studio .background h4');
let animationEnabled = false;

const enableAnimation = () => {
    if (!animationEnabled) {
        text.classList.add('animate-text');
        animationEnabled = true;
    }
};

const disableAnimation = () => {
    if (animationEnabled) {
        text.classList.remove('animate-text');
        animationEnabled = false;
    }
};

background.addEventListener('mouseover', enableAnimation);
background.addEventListener('mouseout', disableAnimation);

/**
 * swiper effect coverflow sur les personnages
 */
const mySwiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});

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
    } else {
      // Désactive l'image de la croix et active l'image du burger
        burgerIcon.classList.add('active-icon');
        crossIcon.classList.remove('active-icon');
    }
}