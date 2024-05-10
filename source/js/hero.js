import Swiper from 'swiper';

import { Pagination } from 'swiper/modules';

new Swiper('.hero', {
  modules: [Pagination],

  watchSlidesProgress: true,
  slideActiveClass: 'hero__slide--active',
  loop: true,
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
      width: 320,
    },
    768: {
      width: 768,
    },
    1440: {
      width: 1440,
      simulateTouch: false,
    },
  }
});

const bullets = document.querySelectorAll('.hero__bullet');
bullets.forEach((bullet) => {
  bullet.setAttribute('aria-label', 'Переключите слайд');
});
