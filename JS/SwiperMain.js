var swiper = new Swiper('#mainSlider', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  loopAdditionalSlides: 1,
  grabCursor: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination1',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ======Banner Slider End======

var swiper = new Swiper('#popular_movies #swiper1', {
  loop: false,
  speed: 800,
  // autoplay: {
  //   delay: 3000,
  // },
  loopAdditionalSlides: 1,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination2',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
