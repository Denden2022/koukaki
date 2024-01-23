/**
 * I-Effet parallax sur le titre de la vidéo et effet de flottement en 2 parties
 */
/*****animation de descente du Logo au scroll et qui s'arrête à la bordure de la vidéo*/
function LogoAnimationDown() {
  const logo = document.querySelector('.parallax-logo');
  const stopAnimationAt = 400; // Position de l'animation qui s'arrête à un point précis

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const parallaxValue = scrollTop * 0.5;

    // Si l'élément est dans la vue et la position de défilement n'a pas dépassé le point d'arrêt
    if (logo.classList.contains('in-view') && scrollTop <= stopAnimationAt) {
      logo.style.transform = `translateY(${parallaxValue}px)`;
    } return;
  };

  const seeLogo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        logo.classList.add('in-view');
        window.addEventListener('scroll', handleScroll);
      } else {
        logo.classList.remove('in-view');
        window.removeEventListener('scroll', handleScroll);
      }
    });
  });

  seeLogo.observe(document.querySelector('#logo'));
}

LogoAnimationDown();


/****II-Animation du logo qui flotte */
//le Logo flotte
function LogoFloat() {
  const logo = document.querySelector('.float-logo');
 
  // A chaque fois que la nouvelle class est présente, le logo flotte
 const seeLogo = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      logo.classList.add('anim-logo-scroll');
      return;
    }
      logo.classList.remove('anim-logo-scroll');
  });
 });
 
 seeLogo.observe(document.querySelector('#background-video'));
 }
 
 LogoFloat();


/**
 * III-mouvement des titres sur fond bleu
 */
  /****** a) animation L'histoire au scroll*****/
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
    threshold: 1, // Déclenche la fonction de rappel lorsque 100% du texte est visible
  });
  // Ciblage de l'élément texte à observer
  const targetTextStory = document.querySelector('.text-story');
  // Lancement de l'observation
  seeStory.observe(targetTextStory);


  /**** b) titre Studio koukaki*****/
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
 * IV-mouvements des nuages au scroll
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
