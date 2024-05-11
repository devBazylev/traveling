import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.reviews', {
  modules: [Navigation],
  watchSlidesProgress: true,
  slideActiveClass: 'reviews__slide--active',
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  breakpoints: {
    320: {
      width: 290,
      spaceBetween: 15,
      autoHeight: true,
    },
    768: {
      width: 565,
      spaceBetween: 30,
      autoHeight: true,
    },
    1440: {
      width: 700,
      spaceBetween: 120,
      autoHeight: false,
      simulateTouch: false,
    },
  }
});
