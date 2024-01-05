

//mouvements des nuages au scroll
// Remove the transition class
const clouds = document.querySelector('.anim-clouds');
clouds.classList.remove('anim-clouds-scroll');

// Create the observer, same as before:
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