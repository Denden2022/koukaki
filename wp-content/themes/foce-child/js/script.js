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
document.addEventListener('DOMContentLoaded', function () {
  const background = document.querySelector('#studio .background');
  const text = document.querySelector('#studio .background h4');
  let animationEnabled = false;
      
  const enableAnimation = () => {
    if (!animationEnabled) {
        text.classList.add('animate-text');
        animationEnabled = true;
        }
  };
      
  background.addEventListener('mouseover', enableAnimation);
});
      
/**
 * swiper effect coverflow sur les personnages
 */
document.addEventListener('DOMContentLoaded', function() {
  let mySwiper = new Swiper('.mySwiper', {
    // Options de configuration de Swiper ici
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
    }
        })
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