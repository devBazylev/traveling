import Swiper from 'swiper';
import { Navigation, Manipulation, Virtual } from 'swiper/modules';

const swiper = new Swiper('.adv', {
  modules: [Navigation, Manipulation, Virtual],

  slidesPerView: 'auto',
  slidesPerGroup: 2,
  initialSlide: 2,
  loop: true,
  watchSlidesProgress: true,
  watchOverflow: true,
  centeredSlides: true,
  loopAddBlankSlides: false,
  loopAdditionalSlides: 0,

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
