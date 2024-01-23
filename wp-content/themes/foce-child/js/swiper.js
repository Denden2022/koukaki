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
  