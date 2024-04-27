import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.tours', {
  modules: [Navigation],

  slidesPerView: 'auto',
  slidesPerGroup: 1,

  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 15,
    },
    768: {
      spaceBetween: 18,
    },
    1440: {
      spaceBetween: 30,
      simulateTouch: false,
    },
  }
});

// watchOverflow: true,
// centeredSlides: true,
// loopAdditionalSlides: 2,
// slideVisibleClass: 'card--part',
