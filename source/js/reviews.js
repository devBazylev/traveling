import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.reviews', {
  modules: [Navigation],
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  breakpoints: {
    320: {
      slidesOffsetBefore: 15,
      slidesOffsetAfter: 15,
      spaceBetween: 15,
      autoHeight: true,
    },
    768: {
      slidesOffsetBefore: 45,
      slidesOffsetAfter: 45,
      spaceBetween: 30,
      autoHeight: true,
    },
    1440: {
      slidesOffsetBefore: 120,
      slidesOffsetAfter: 120,
      spaceBetween: 120,
      autoHeight: false,
      simulateTouch: false,
    },
  }
});
