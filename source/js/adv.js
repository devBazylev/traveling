import Swiper from 'swiper';
import { Navigation, Manipulation, A11y } from 'swiper/modules';
import { addClassArray, resetClassArray, cloneSlides, setListener, removeListener } from './util.js';

const mob = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
const tab = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
const desk = window.matchMedia('(min-width: 1440px)');
const adv = document.querySelector('.adv');
const slider = adv.querySelector('.adv__container');
const slides = adv.querySelectorAll('.adv__card');

const slideWidth = parseFloat(getComputedStyle(slides[0]).width);
const slidesLength = slides.length;
const SLIDES_PER_GROUP = 2;
const INITIAL_SLIDE = 2;
const clones = [];
let totalSlides;

const recalcSlides = () => {
  totalSlides = slidesLength + clones.length;
  const screenWidth = window.innerWidth;
  const minSlides = Math.ceil(screenWidth / slideWidth + SLIDES_PER_GROUP);
  for (let i = totalSlides; i < minSlides; i = i + slidesLength) {
    cloneSlides(slider, slides, clones);
  }
};

const swiper = new Swiper('.adv', {
  modules: [Navigation, Manipulation, A11y ],
  init: false,
  loop: true,
  observer: true,
  slidesPerView: 'auto',
  slidesPerGroup: SLIDES_PER_GROUP,
  initialSlide: INITIAL_SLIDE,
  watchSlidesProgress: true,
  centeredSlides: true,
  loopAddBlankSlides: false,
  loopAdditionalSlides: 0,
  observeParents: true,
  resizeObserver: true,
  updateOnWindowResize: true,
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
  a11y: {
    enabled: true,
    containerMessage: 'Swiper of advantages.',
    itemRoleDescriptionMessage: 'Slide.',
    firstSlideMessage: 'First slide.',
    lastSlideMessage: 'Last slide.',
    prevSlideMessage: 'Previous slide.',
    nextSlideMessage: 'Next slide.',
  },
  on: {
    breakpoint: function () {
      if (mob.matches || tab.matches) {
        this.disable();
        addClassArray(clones, 'adv__card--none');
        setTimeout(() => {
          slider.style.transform = 'translate3d(0px, 0px, 0px)';
        }, 300);
      }
      if (desk.matches) {
        recalcSlides();
        this.enable();
        resetClassArray(clones, 'adv__card--none');
        setTimeout(() => {
          slider.style.transform = 'translate3d(-1110px, 0px, 0px)';
        }, 300);
      }
    },
    resize: function () {
      if (mob.matches || tab.matches) {
        this.disable();
        addClassArray(clones, 'adv__card--none');
        setTimeout(() => {
          slider.style.transform = 'translate3d(0px, 0px, 0px)';
        }, 300);
      } else {
        recalcSlides();
        this.enable();
        resetClassArray(clones, 'adv__card--none');
        setTimeout(() => {
          slider.style.transform = 'translate3d(-1110px, 0px, 0px)';
        }, 300);
      }
    }
  },
});

const onScreen = () => {
  if (totalSlides !== 0 && desk.matches) {
    swiper.init();
    removeListener(window, 'load', onScreen);
    removeListener(window, 'resize', onScreen);
  }
};

setListener(window, 'load', onScreen);
setListener(window, 'resize', onScreen);
