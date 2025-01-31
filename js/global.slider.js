export default class Slider {
  constructor(container) {
    this.container =
      typeof container === 'string'
        ? document.querySelector(container)
        : container;

    if (!this.container) return;

    this.track = this.container.querySelector('[data-track]');
    this.slides = Array.from(this.track.children);
    this.prevButton = this.container.querySelector('[data-prev]');
    this.nextButton = this.container.querySelector('[data-next]');

    if (!this.track || !this.slides.length) return;

    this.slidesPerView = this.getSlidesPerView();
    this.currentIndex = this.slidesPerView;

    this.cloneSlides();
    this.addEventListeners();
    this.updateSlidePositions();
  }

  getSlidesPerView() {
    return window.innerWidth >= 1280 ? 4 : window.innerWidth >= 768 ? 2 : 1;
  }

  cloneSlides() {
    const clones = this.slidesPerView;
    this.slides
      .slice(0, clones)
      .forEach(slide => this.track.append(slide.cloneNode(true)));
    this.slides
      .slice(-clones)
      .forEach(slide => this.track.prepend(slide.cloneNode(true)));
    this.slides = Array.from(this.track.children);
  }

  updateSlidePositions() {
    const slideWidth = 100 / this.slidesPerView;
    this.slides.forEach(slide => (slide.style.width = `${slideWidth}%`));
    this.track.style.transform = `translateX(${
      -this.currentIndex * slideWidth
    }%)`;
  }

  slide(direction) {
    this.currentIndex += direction === 'next' ? 1 : -1;
    this.track.style.transition = 'transform 0.5s ease-in-out';
    this.updateSlidePositions();

    setTimeout(() => {
      if (this.currentIndex >= this.slides.length - this.slidesPerView) {
        this.currentIndex = this.slidesPerView;
      } else if (this.currentIndex < this.slidesPerView) {
        this.currentIndex = this.slides.length - this.slidesPerView * 2;
      }
      this.track.style.transition = 'none';
      this.updateSlidePositions();
    }, 500);
  }

  debounce(func, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  handleResize() {
    this.slidesPerView = this.getSlidesPerView();
    this.currentIndex = this.slidesPerView;
    this.cloneSlides();
    this.updateSlidePositions();
  }

  addEventListeners() {
    if (this.prevButton && this.nextButton) {
      this.prevButton.addEventListener('click', () => this.slide('prev'));
      this.nextButton.addEventListener('click', () => this.slide('next'));
    }

    this.debouncedResize = this.debounce(this.handleResize, 200);
    window.addEventListener('resize', this.debouncedResize);
  }
}

document.querySelectorAll('[data-carousel]').forEach(carousel => {
  new Slider(carousel);
});
