import Swiper from 'swiper';
import { Navigation, Manipulation } from 'swiper/modules';
import { addClassArray, resetClassArray, cloneSlides } from './util.js';

const gallery = document.querySelector('.gallery');
const slides = gallery.querySelectorAll('.gallery__slide');
const clones = [];

const swiper = new Swiper('.gallery', {
  modules: [Navigation, Manipulation],
  loop: true,
  watchSlidesProgress: true,
  slidesPerGroup: 1,
  slidesPerView: 'auto',
  slideActiveClass: 'gallery__slide--active',
  slideVisibleClass: 'gallery__slide--part',
  navigation: {
    nextEl: '.gallery__button--next',
    prevEl: '.gallery__button--prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 5,
    },
    768: {
      spaceBetween: 5,
    },
    1440: {
      spaceBetween: 0,
      simulateTouch: false,
    },
  },
  on: {
    init: function () {
      if (clones.length === 0) {
        cloneSlides(slides, clones);
      }
    },
    breakpoint: function () {
      if (window.innerWidth > 1439 || window.innerWidth < 768) {
        addClassArray(clones, 'gallery__slide--invisible');
      } else {
        resetClassArray(clones, 'gallery__slide--invisible');
      }
    },
  },
});

swiper.appendSlide(clones);

// if (window.innerWidth < 1440 && window.innerWidth >= 768) {
//   swiper.appendSlide(clones);
// }
