//Mise en place du Menu
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
      // Désactiver les éléments ::before de la classe .anim-titles et ::after de la classe .oscars-text
      const flowerPurple = document.querySelector('.oscars-bloc');
      const flowerPink = document.querySelector('.anim-titles');
      flowerPurple.classList.toggle('menu-open');
      flowerPink.classList.toggle('menu-open');
    });
  });


  