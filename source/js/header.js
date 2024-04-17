const header = document.querySelector('.header');
const nav = header.querySelector('.header__navigation');
const burger = header.querySelector('.header__button');

const toggleMenu = () => {
  nav.classList.toggle('header__navigation--closed');
};

burger.addEventListener('click', toggleMenu);
