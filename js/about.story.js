let aboutText = document.querySelector('.story__text__hidden');
let aboutButton = document.querySelector('.story__link');

aboutButton.addEventListener('click', () => {
  if (aboutText.classList.contains('story__text__hidden')) {
    aboutText.classList.remove('story__text__hidden');
    aboutButton.textContent = 'Close';
  } else {
    aboutText.classList.add('story__text__hidden');
    aboutButton.textContent = 'Learn More';
  }
});