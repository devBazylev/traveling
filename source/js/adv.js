import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.adv', {
  modules: [Navigation],

  slidesPerView: 'auto',
  slidesPerGroup: 2,
  initialSlide: 2,
  loop: true,
  watchOverflow: true,
  centeredSlides: true,
  loopAddBlankSlides: false,
  // loopAdditionalSlides: 20,
  // loopedSlides: 15,

  navigation: {
    nextEl: '.adv__button--next',
    prevEl: '.adv__button--prev',
  },

  breakpoints: {
    1440: {
      spaceBetween: 30,
      simulateTouch: false,
    },
  }
});

if (window.innerWidth < 1440) {
  swiper.destroy();
}
