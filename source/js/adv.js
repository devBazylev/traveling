import Swiper from 'swiper';
import { Navigation, Manipulation } from 'swiper/modules';
// import { addClassArray, resetClassArray, addSlides } from './util.js';

// const adv = document.querySelector('.adv');
// const slider = adv.querySelector('.adv__container');
// const slides = adv.querySelectorAll('.adv__card');

// const clones = [];

// console.log('achtung!!!');

new Swiper('.adv', {
  modules: [Navigation, Manipulation],
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
      autoHeight: true,
    },
    768: {
      autoHeight: true,
    },
    1440: {
      spaceBetween: 30,
      autoHeight: false,
      simulateTouch: false,
    },
  }
});


// if (window.innerWidth >= 4000) {
//   addSlides(slider, slides);
// }

// if (window.innerWidth >= 2600) {
//   addSlides(slider, slides);
// }

// if (window.innerWidth >= 1440) {
//   addSlides(slider, slides);
//   initSwiper();
// }

// const clones = Array.from(adv.querySelectorAll('[data-clone]'));

// addClassArray(clones, 'adv__card--invisible');
// resetClassArray(clones, 'adv__card--invisible');

// console.log(clones);
// swiper.once(event, handler);
