import Swiper from 'swiper';
import { Navigation, Manipulation } from 'swiper/modules';

const adv = document.querySelector('.adv');
const slider = adv.querySelector('.adv__container');
const slides = adv.querySelectorAll('.adv__card');

const addSlides = () => {
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    clone.setAttribute('aria-hidden', true);
    slider.appendChild(clone);
  });
};

const initSwiper = () => {
  new Swiper('.adv', {
    modules: [Navigation, Manipulation],

    slidesPerView: 'auto',
    slidesPerGroup: 2,
    initialSlide: 2,
    loop: true,
    watchSlidesProgress: true,
    centeredSlides: true,
    loopAddBlankSlides: false,
    loopAdditionalSlides: 0,
    autoHeight: true,

    navigation: {
      nextEl: '.adv__button--next',
      prevEl: '.adv__button--prev',
    },

    breakpoints: {
      1440: {
        spaceBetween: 30,
        simulateTouch: false,
      },
    }
  });
};

if (window.innerWidth >= 4000) {
  addSlides();
}

if (window.innerWidth >= 2600) {
  addSlides();
}

if (window.innerWidth >= 1440) {
  addSlides();
  initSwiper();
}
