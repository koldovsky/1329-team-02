let aboutText = document.querySelector('.hidden');
let aboutButton = document.querySelector('.story__link');

aboutButton.addEventListener('click', () => {
  if (aboutText.classList.contains('hidden')) {
    aboutText.classList.remove('hidden');
    aboutButton.textContent = 'Close';
  } else {
    aboutText.classList.add('hidden');
    aboutButton.textContent = 'Learn More';
  }
});