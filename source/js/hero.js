import Swiper from 'swiper';

import { Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';

new Swiper('.swiper', {
  modules: [Pagination],

  watchSlidesProgress: true,
  slideActiveClass: 'hero__slide--active',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
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
