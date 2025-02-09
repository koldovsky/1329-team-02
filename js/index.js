function init() {
  import('./global.header.js');
  import('./global.slider.js');
  import('./global.scroll-top.js');
  import('./global.smooth-scroll.js');
  import('./global.modal-window.js');
  import('./global.footer.js');
  import('./index.broadcasts.js')
  import('./index.news.js')  
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
