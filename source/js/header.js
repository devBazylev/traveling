const header = document.querySelector('.header');
const nav = header.querySelector('.header__navigation');
const burger = header.querySelector('.header__button');

nav.classList.remove('header__navigation--no-js');

if(window.innerWidth < 1440){
  nav.classList.add('header__navigation--closed');
}

const onNav = () => {
  nav.classList.toggle('header__navigation--closed');
  if (!nav.classList.contains('header__navigation--closed')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
};

burger.addEventListener('click', onNav);
