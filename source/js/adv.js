import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.adv', {
  modules: [Navigation],

  slidesPerView: 'auto',
  slidesPerGroup: 2,
  loop: true,
  // loopedSlides: 15,
  // loopAddBlankSlides: true,

  navigation: {
    nextEl: '.adv__button--next',
    prevEl: '.adv__button--prev',
  },

  breakpoints: {
    1440: {
      // width: 380,
      spaceBetween: 30,
      simulateTouch: false,
    },
  }
});

if (window.innerWidth < 1440) {
  swiper.destroy();
}
