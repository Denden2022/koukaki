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
      rotate: 50,
      stretch: 0,
      slideShadows: true,
    },
  });
  