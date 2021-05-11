export default function changeNavColorScheme() {
  let sliderElem = document.querySelector(`.screen--story.active`);

  if(!sliderElem) {
    document.body.classList.remove(`color-scheme-blue`);
    document.body.classList.remove(`color-scheme-cyan`);
    return;
  }

  let cyanSliedElem = sliderElem.querySelector(`.swiper-slide-active.slider__item--cyan`);
  let blueSliedElem = sliderElem.querySelector(`.swiper-slide-active.slider__item--blue`);

  if (blueSliedElem) {
    document.body.classList.add(`color-scheme-blue`);
  }

  if (!blueSliedElem) {
    document.body.classList.remove(`color-scheme-blue`);
  }

  if (cyanSliedElem) {
    document.body.classList.add(`color-scheme-cyan`);
  }

  if (!cyanSliedElem) {
    document.body.classList.remove(`color-scheme-cyan`);
  }
};