const playButtonHtml =
  'Preview Episode <svg class="podcast-card__button-icon"xmlns="http://www.w3.org/2000/svg"viewBox="0 0 1000 1000"><path d="M732.5,508c0,15.119-8.137,28.332-20.275,35.517L410.207,721.984c-0.107,0.067-0.215,0.121-0.309,0.188l-0.174,0.095c-6.137,3.639-13.32,5.733-20.975,5.733c-22.773,0-41.25-18.463-41.25-41.25v-357.5c0-22.773,18.477-41.25,41.25-41.25c7.654,0,14.838,2.108,20.975,5.747v-0.014l0.174,0.094c0.094,0.081,0.201,0.134,0.309,0.202l302.018,178.454C724.363,479.681,732.5,492.894,732.5,508"></path></svg>';
const pauseButtonHtml =
  'Preview Episode <svg width="13px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="podcast-card__button-pause-icon" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>1229</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(1.000000, 0.000000)" fill="#ffffff"> <path d="M0.002,1 C0.002,0.447 0.446,0 0.995,0 L4.967,0 C5.516,0 5.96,0.447 5.96,1 L5.96,15 C5.96,15.553 5.516,16 4.967,16 L0.995,16 C0.446,16 0.002,15.553 0.002,15 L0.002,1 L0.002,1 Z" class="si-glyph-fill"> </path> <path d="M8.002,1 C8.002,0.447 8.446,0 8.995,0 L12.967,0 C13.516,0 13.96,0.447 13.96,1 L13.96,15 C13.96,15.553 13.516,16 12.967,16 L8.995,16 C8.446,16 8.002,15.553 8.002,15 L8.002,1 L8.002,1 Z" > </path> </g> </g> </g></svg>';

const podcastCards = document.querySelectorAll('.podcast-card');

podcastCards.forEach(card => {
  const audioSrc = card.getAttribute('data-audio');
  const button = card.querySelector('.podcast-card__button-play');

  let audio = new Audio(audioSrc);

  button.addEventListener('click', function () {
    if (audio.paused) {
      audio.play();
      button.innerHTML = pauseButtonHtml;
    } else {
      audio.pause();
      audio.currentTime = 0;
      button.innerHTML = playButtonHtml;
    }
  });

  audio.addEventListener('ended', function () {
    button.innerHTML = playButtonHtml;
  });
});
