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
    bulletClass: 'swiper-pagination-bullet',
    type: 'bullets',
    bulletElement: 'button',
    clickable: true,
    // on: {
    //   init: function onFocus() {
    //     'swiper-pagination-bullet'.setAttribute('tabIndex', 0);
    //   }
    // }
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
