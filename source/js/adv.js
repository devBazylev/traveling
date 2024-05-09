import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const adv = document.querySelector('.adv');
const slider = adv.querySelector('.adv__container');
const slides = adv.querySelectorAll('.adv__card');

if (window.innerWidth >= 1440) {
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });
}

const swiper = new Swiper('.adv', {
  modules: [Navigation],

  slidesPerView: 'auto',
  slidesPerGroup: 2,
  initialSlide: 2,
  loop: true,
  watchSlidesProgress: true,
  watchOverflow: true,
  centeredSlides: true,
  loopAddBlankSlides: false,
  loopAdditionalSlides: 0,

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

if (window.innerWidth < 1440) {
  swiper.destroy();
}
