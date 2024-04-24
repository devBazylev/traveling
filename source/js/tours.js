import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.tours', {
  modules: [Navigation],

  watchSlidesProgress: true,
  slideActiveClass: 'card--active',
  slideFullyVisibleClass: 'card--visible',

  slidesPerView: 'auto',

  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },
  // по одному слайду переключается!!!

  breakpoints: {
    320: {
      initialSlide: 0,
      spaceBetween: 15,
    },
    768: {
      initialSlide: 0,
      spaceBetween: 18,
    },
    1440: {
      initialSlide: 0,
      spaceBetween: 30,
      simulateTouch: false,
    },
  }
});
