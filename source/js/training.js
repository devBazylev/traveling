import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.training__slider', {
  modules: [Navigation],

  watchSlidesProgress: true,
  slideActiveClass: 'training__instructor--active',
  slideFullyVisibleClass: 'training__instructor--visible',

  slidesPerView: 'auto',

  navigation: {
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev',
  },
  // по одному слайду переключается!!!

  breakpoints: {
    320: {
      initialSlide: 2,
      spaceBetween: 15,
    },
    768: {
      initialSlide: 0,
      spaceBetween: 20,
    },
    1440: {
      initialSlide: 0,
      spaceBetween: 20,
      simulateTouch: false,
    },
  }
});
