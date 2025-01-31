const trigger = document.querySelector('[data-trigger]');
const backdrop = document.querySelector('[data-backdrop]');

if (trigger && backdrop) {
  const closeBtn = backdrop.querySelector('[data-close]');

  const closeModal = () => {
    document.removeEventListener('keydown', onEscPress);
    backdrop.classList.add('is-hidden');
    document.body.classList.remove('is-open');
  };

  const onEscPress = event => event.code === 'Escape' && closeModal();
  const onBackdropClick = event =>
    !event.target.closest('[data-wrapper]') && closeModal();

  trigger.addEventListener('click', event => {
    event.preventDefault();
    backdrop.classList.remove('is-hidden');
    document.body.classList.add('is-open');
    document.addEventListener('keydown', onEscPress);
  });

  backdrop.addEventListener('click', onBackdropClick);
  closeBtn?.addEventListener('click', closeModal);
}
