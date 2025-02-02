document.querySelectorAll('[data-scroll-to]').forEach(link => {
  link.addEventListener('click', event => {
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
