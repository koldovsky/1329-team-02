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
    this.container = document.querySelector('.artists__slider');
    this.track = this.container.querySelector('.artists__list');
    this.slides = Array.from(this.track.children);
    this.prevButton = this.container.querySelector('.artists__button.js-prev');
    this.nextButton = this.container.querySelector('.artists__button.js-next');
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
    this.currentIndex += direction === 'js-next' ? 1 : -1;
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
    this.prevButton.addEventListener('click', () => this.slide('js-prev'));
    this.nextButton.addEventListener('click', () => this.slide('js-next'));
    window.addEventListener('resize', () => {
      this.slidesPerView = this.getSlidesPerView();
      this.currentIndex = this.slidesPerView;
      this.cloneSlides();
      this.updateSlidePositions();
    });
  }
}

new Carousel();
