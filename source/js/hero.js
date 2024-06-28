import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { setListener } from './util.js';

let windowWidth;

const onScreen = () => {
  windowWidth = window.innerWidth;
};

new Swiper('.hero', {
  modules: [Pagination],
  loop: true,
  watchSlidesProgress: true,
  slideActiveClass: 'hero__slide--active',
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    bulletActiveClass: 'hero__bullet--active',
    bulletClass: 'hero__bullet',
    type: 'bullets',
    bulletElement: 'button',
    clickable: true,
  },
  breakpoints: {
    320: {
      width: windowWidth,
    },
    768: {
      width: windowWidth,
    },
    1440: {
      width: windowWidth,
      simulateTouch: false,
    },
  }
});

const bullets = document.querySelectorAll('.hero__bullet');
bullets.forEach((bullet) => {
  bullet.setAttribute('aria-label', 'Переключите слайд');
});

setListener(window, 'resize', onScreen);
