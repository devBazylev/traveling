import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { cloneSlides } from './util.js';

const tours = document.querySelector('.tours');
const slidesWrapper = tours.querySelector('.tours__wrapper');
const slides = tours.querySelectorAll('.card');

const clones = [];

cloneSlides(slidesWrapper, slides, clones);

const swiper = new Swiper('.tours__slider', {
  modules: [Navigation],
  watchSlidesProgress: true,
  slideActiveClass: 'tours__slide--active',
  slideVisibleClass: 'tours__slide--visible',
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
    },
    768: {
      spaceBetween: 18,
    },
    1440: {
      spaceBetween: 30,
      simulateTouch: false,
    },
  }
});

swiper.init();
