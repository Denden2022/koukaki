//mouvements des nuages au scroll
  // Retirer la class
const clouds = document.querySelector('.anim-clouds');
clouds.classList.remove('anim-clouds-scroll');

  // Créer observer à chaque fois que j'observe les nuages donc j'ajoute la class
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

//mouvement des titres sur fond bleu
  //titre L'histoire
  document.addEventListener('DOMContentLoaded', function () {
    const backgroundStory = document.querySelector('.title-story');
    const textStory = document.querySelector('.title-story h1');
    let animationEnabled = false;
  
    const enableAnimation = () => {
      if (!animationEnabled) {
        textStory.classList.add('animate-text-story');
        animationEnabled = true;
      }
    };
  
    const disableAnimation = () => {
      // Ne rien faire ici, laissez l'animation continuer
    };
  
    backgroundStory.addEventListener('mouseover', enableAnimation);
    backgroundStory.addEventListener('mouseout', disableAnimation);
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
      
        const disableAnimation = () => {
          // Ne rien faire ici, laissez l'animation continuer
        };
      
        background.addEventListener('mouseover', enableAnimation);
        background.addEventListener('mouseout', disableAnimation);
      });
      
//swiper effect coverflow sur les personnages
document.addEventListener('DOMContentLoaded', function() {
  let mySwiper = new mySwiper('.swiper-container', {
    // Options de configuration de Swiper ici
        effect: 'coverflow',
        direction: 'horizontal',
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