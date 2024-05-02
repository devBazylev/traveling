import { removeClass, toggleClass, setListener, setListenerArray } from './util.js';

const header = document.querySelector('.header');
const nav = header.querySelector('.header__navigation');
const burger = header.querySelector('.header__button');
const links = header.querySelectorAll('.header__link');

const onLink = () => {
  toggleClass(nav, 'header__navigation--closed');
  document.body.style.overflow = 'visible';
};

const onBurger = () => {
  toggleClass(nav, 'header__navigation--closed');
  if (!nav.classList.contains('header__navigation--closed')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  setListenerArray(links, 'click', onLink);
};

if (window.innerWidth > 1439){
  removeClass(nav, 'header__navigation--closed');
}

if (window.innerWidth < 1440){
  setListener(burger, 'click', onBurger);
}
