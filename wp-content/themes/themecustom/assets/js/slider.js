var swiper = new Swiper(".serviceSwiper", {
  slidesPerView: window.innerWidth > 768 ? 2.5 : 1.4,
  spaceBetween: window.innerWidth > 768 ? 24 * 3 + 8 * 2 : 16,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

