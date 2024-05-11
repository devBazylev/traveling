import Swiper from 'swiper';
import { Navigation, Manipulation } from 'swiper/modules';
import { addClassArray, resetClassArray, cloneSlides } from './util.js';

const mob = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
const tab = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
const desk = window.matchMedia('(min-width: 1440px)');

const adv = document.querySelector('.adv');
const slider = adv.querySelector('.adv__container');
const slides = adv.querySelectorAll('.adv__card');
const clones = [];

cloneSlides(slider, slides, clones);

const swiper = new Swiper('.adv', {
  modules: [Navigation, Manipulation],
  init: false,
  loop: true,
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  initialSlide: 2,
  centeredSlides: true,
  loopAddBlankSlides: false,
  loopAdditionalSlides: 0,
  navigation: {
    nextEl: '.adv__button--next',
    prevEl: '.adv__button--prev',
  },
  breakpoints: {
    320: {
      initialSlide: 0,
      spaceBetween: 0,
    },
    768: {
      initialSlide: 0,
      spaceBetween: 0,
    },
    1440: {
      initialSlide: 2,
      spaceBetween: 30,
      autoHeight: false,
      simulateTouch: false,
    },
  },
});

const onScreen = () => {
  if (mob.matches) {
    swiper.disable();
    addClassArray(clones, 'adv__card--none');
    setTimeout(() => {
      slider.style.transform = 'translate3d(0px, 0px, 0px)';
    }, 100);
  }
  if (tab.matches) {
    swiper.disable();
    addClassArray(clones, 'adv__card--none');
    setTimeout(() => {
      slider.style.transform = 'translate3d(0px, 0px, 0px)';
    }, 100);
  }
  if (desk.matches) {
    slider.style.transform = 'unset';
    resetClassArray(clones, 'adv__card--none');
    swiper.enable();
    swiper.init();
  }
};

window.addEventListener('load', onScreen);
window.addEventListener('resize', onScreen);
