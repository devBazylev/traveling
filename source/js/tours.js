import Swiper from 'swiper';

import { Navigation } from 'swiper/modules';

new Swiper('.tours', {
  modules: [Navigation],

  watchSlidesProgress: true,
  slideActiveClass: 'tours__slide--active',
  slideFullyVisibleClass: 'tours__slide--visible',

  // slidesPerView: 3,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // по одному слайду переключается!!!

  breakpoints: {
    320: {
      navigation: false,
      initialSlide: 0,
      spaceBetween: 50,
      width: 290,
    },
    768: {
      initialSlide: 0,
      spaceBetween: 18,
      width: 678,
    },
    1440: {
      initialSlide: 0,
      spaceBetween: 30,
      width: 1200,
      // width: '100%',
    },
  }
});
