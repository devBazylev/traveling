import Swiper from 'swiper';
import { Navigation, Manipulation } from 'swiper/modules';
import { addClassArray, resetClassArray, cloneSlides } from './util.js';

const gallery = document.querySelector('.gallery');
const slider = gallery.querySelector('.gallery__container');
const slides = gallery.querySelectorAll('.gallery__slide');
const desk = window.matchMedia('(min-width: 1440px)');
const clones = [];

cloneSlides(slider, slides, clones);

new Swiper('.gallery', {
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
    breakpoint: function () {
      if (desk.matches) {
        addClassArray(clones, 'gallery__slide--none');
        this.disable();
      } else {
        resetClassArray(clones, 'gallery__slide--none');
        this.enable();
      }
    },
  },
});
