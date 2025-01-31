const trigger = document.querySelector('[data-trigger]');
const backdrop = document.querySelector('[data-backdrop]');
const closeBtn = backdrop?.querySelector('[data-close]');
const wrapper = backdrop?.querySelector('[data-wrapper]');

if (trigger && backdrop && closeBtn && wrapper) {
  function openModal(event) {
    event.preventDefault();
    backdrop.classList.remove('is-hidden');
    document.body.classList.add('is-open');

    document.addEventListener('keydown', onEscPress);
    backdrop.addEventListener('click', onBackdropClick);
    closeBtn.addEventListener('click', closeModal);
  }

  function closeModal() {
    document.removeEventListener('keydown', onEscPress);
    backdrop.removeEventListener('click', onBackdropClick);
    closeBtn.removeEventListener('click', closeModal);
    backdrop.classList.add('is-hidden');
    document.body.classList.remove('is-open');
  }

  function onEscPress(event) {
    if (event.code === 'Escape') closeModal();
  }

  function onBackdropClick(event) {
    if (!event.target.closest('[data-wrapper]')) closeModal();
  }

  trigger.addEventListener('click', openModal);
}
