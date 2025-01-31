function init() {
  import('./global.header.js');
  import('./about.story.js');
  import('./global.slider.js');
  import('./global.scroll-top.js');
  import('./global.modal-window.js');
  import('./global.footer.js');
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
