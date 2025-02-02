let isClickTriggered = false;

document.querySelectorAll('[data-scroll-to]').forEach(link => {
  link.addEventListener('click', event => {
    isClickTriggered = true;
    const targetId = link.getAttribute('data-scroll-to');
    const currentPage =
      window.location.pathname.endsWith('index.html') ||
      window.location.pathname === '/';

    if (currentPage) {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = `./index.html#${targetId}`;
    }
  });
});

if (window.location.hash && !isClickTriggered) {
  setTimeout(() => {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 300);
}
