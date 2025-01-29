class Carousel {
  constructor() {
    this.initElements();
    this.slidesPerView = this.getSlidesPerView();
    this.currentIndex = this.slidesPerView;

    this.cloneSlides();
    this.addEventListeners();
    this.updateSlidePositions();
  }

  initElements() {
    this.container = document.querySelector('.team__slider');
    this.track = this.container.querySelector('.team__list');
    this.slides = Array.from(this.track.children);
    this.prevButton = this.container.querySelector('.team__button.js-btn-prev');
    this.nextButton = this.container.querySelector('.team__button.js-btn-next');
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
    this.currentIndex += direction === 'js-btn-next' ? 1 : -1;
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

  addEventListeners() {
    this.prevButton.addEventListener('click', () => this.slide('js-btn-prev'));
    this.nextButton.addEventListener('click', () => this.slide('js-btn-next'));
    window.addEventListener('resize', () => {
      this.slidesPerView = this.getSlidesPerView();
      this.currentIndex = this.slidesPerView;
      this.cloneSlides();
      this.updateSlidePositions();
    });
  }
}

new Carousel();
