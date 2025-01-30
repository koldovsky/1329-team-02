const scrollToTopBtn = document.querySelector('.scroll__top');
const GOLDEN_RATIO = 0.1;

scrollToTopBtn.style.display = 'none';

document.addEventListener('scroll', () => {
  scrollToTopBtn.style.display =
    document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight) >
    GOLDEN_RATIO
      ? 'block'
      : 'none';
});

scrollToTopBtn.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
