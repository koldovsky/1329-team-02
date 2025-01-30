const body = document.querySelector('body');
const header = document.querySelector('.header');
const btnBurger = document.querySelector('.header__burger-btn');
const menuLinks = document.querySelector('.header__menu');

btnBurger.addEventListener('click', () => {
  body.classList.toggle('overflow-hidden');
  header.classList.toggle('menu-open');
});

menuLinks.addEventListener('click', () => {
  body.classList.remove('overflow-hidden');
  header.classList.remove('menu-open');
});
