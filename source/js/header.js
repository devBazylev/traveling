import { addClass, removeClass, toggleClass, setListener, setListenerArray } from './util.js';

const header = document.querySelector('.header');
const nav = header.querySelector('.header__navigation');
const burger = header.querySelector('.header__button');
const links = header.querySelectorAll('.header__link');

removeClass(nav, 'header__navigation--no-js');

if(window.innerWidth < 1440){
  addClass(nav, 'header__navigation--closed');
}

const onLink = () => {
  toggleClass(nav, 'header__navigation--closed');
  document.body.style.overflow = 'visible';
  // removeListenerArray(links, 'click', onLink);
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

setListener(burger, 'click', onBurger);
