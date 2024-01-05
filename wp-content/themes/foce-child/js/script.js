

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

document.addEventListener('DOMContentLoaded', function() {
  let mySwiper = new mySwiper('.swiper-container', {
    // Options de configuration de Swiper ici
    effect: 'coverflow',
    direction: 'horizontal',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
    }
        })
      });
