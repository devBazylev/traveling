import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const gallery = document.querySelector('.gallery');
const slider = gallery.querySelector('.gallery__container');
const slides = gallery.querySelectorAll('.gallery__slide');

const addSlides = () => {
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });
};

const initSwiper = () => {
  new Swiper('.gallery', {
    modules: [Navigation],

    watchSlidesProgress: true,
    slideActiveClass: 'gallery__slide--active',
    slideVisibleClass: 'gallery__slide--part',

    spaceBetween: 5,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    loop: true,
    autoHeight: false,

    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
  });
};

if (window.innerWidth >= 768 && window.innerWidth < 1440) {
  addSlides();
}

if (window.innerWidth < 1440) {
  initSwiper();
}
