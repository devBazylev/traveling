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

new Swiper('.adv', {
  modules: [Navigation, Manipulation],
  init: true,
  loop: true,
  watchSlidesProgress: true,
  observer: true,
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
      spaceBetween: 0,
    },
    768: {
      spaceBetween: 0,
    },
    1440: {
      spaceBetween: 30,
      autoHeight: false,
      simulateTouch: false,
    },
  },
  on: {
    breakpoint: function () {
      if (mob.matches) {
        this.disable();
        addClassArray(clones, 'adv__card--none');
        setTimeout(() => {
          slider.style.transform = 'translate3d(0px, 0px, 0px)';
        }, 300);
      }
      if (tab.matches) {
        this.disable();
        addClassArray(clones, 'adv__card--none');
        setTimeout(() => {
          slider.style.transform = 'translate3d(0px, 0px, 0px)';
        }, 300);
      }
      if (desk.matches) {
        this.enable();
        resetClassArray(clones, 'adv__card--none');
        setTimeout(() => {
          slider.style.transform = 'translate3d(-1110px, 0px, 0px)';
        }, 300);
      }
    },
  },
});

// const onScreen = () => {
//   if (mob.matches) {
//     swiper.disable();
//     addClassArray(clones, 'adv__card--none');
//     setTimeout(() => {
//       slider.style.transform = 'translate3d(0px, 0px, 0px)';
//     }, 300);
//   }
//   if (tab.matches) {
//     swiper.disable();
//     addClassArray(clones, 'adv__card--none');
//     setTimeout(() => {
//       slider.style.transform = 'translate3d(0px, 0px, 0px)';
//     }, 300);
//   }
//   if (desk.matches) {
//     slider.style.transform = 'translate3d(-1110px, 0px, 0px)';
//     resetClassArray(clones, 'adv__card--none');
//     swiper.enable();
//     swiper.init();
//   }
// };

// window.addEventListener('load', onScreen);
// window.addEventListener('resize', onScreen);
