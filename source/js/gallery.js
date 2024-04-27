import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.gallery', {
  modules: [Navigation],

  watchSlidesProgress: true,
  slideActiveClass: 'gallery__slide--active',
  slideVisibleClass: 'gallery__slide--part',
  // slideFullyVisibleClass: 'gallery__slide--visible',

  spaceBetween: 5,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  loop: true,

  navigation: {
    nextEl: '.gallery__button--next',
    prevEl: '.gallery__button--prev',
  },
});

if (window.innerWidth > 1439) {
  swiper.destroy();
}

