import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { addClass, removeClass, setListener } from './util.js';

const reviews = document.querySelector('.reviews');
const reviewsContainer = reviews.querySelector('.reviews__container');
const btnPrev = reviews.querySelector('.reviews__button--prev');
const btnNext = reviews.querySelector('.reviews__button--next');

new Swiper('.reviews', {
  modules: [Navigation],
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  breakpoints: {
    320: {
      slidesOffsetBefore: 15,
      slidesOffsetAfter: 15,
      spaceBetween: 15,
      autoHeight: true,
    },
    768: {
      slidesOffsetBefore: 45,
      slidesOffsetAfter: 45,
      spaceBetween: 30,
      autoHeight: true,
    },
    1440: {
      slidesOffsetBefore: 120,
      slidesOffsetAfter: 120,
      spaceBetween: 120,
      autoHeight: false,
      simulateTouch: false,
    },
    2500: {
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      spaceBetween: 120,
      autoHeight: false,
      simulateTouch: false,
    },
  },
});

const onScreen = () => {
  if (btnPrev.disabled && btnNext.disabled) {
    addClass(reviewsContainer, 'reviews__container--center');
  } else {
    removeClass(reviewsContainer, 'reviews__container--center');
  }
};

setListener(window, 'resize', onScreen);
setListener(window, 'load', onScreen);
