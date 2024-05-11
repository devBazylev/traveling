import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.training__slider', {
  modules: [Navigation],
  watchSlidesProgress: true,
  slideActiveClass: 'training__instructor--active',
  slideVisibleClass: 'training__instructor--part',
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev',
  },
  breakpoints: {
    320: {
      initialSlide: 2,
      spaceBetween: 15,
      autoHeight: true,
    },
    768: {
      initialSlide: 0,
      spaceBetween: 20,
      autoHeight: true,
    },
    1440: {
      initialSlide: 0,
      spaceBetween: 20,
      autoHeight: false,
      simulateTouch: false,
    },
  }
});
