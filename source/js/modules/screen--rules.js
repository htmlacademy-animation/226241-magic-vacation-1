export default () => {
  const rulesElem = document.querySelector(`.rules`);
  const rulesParagraphElems = rulesElem.querySelectorAll(`.rules__item p`);
  const rulesBtnElem = rulesElem.querySelector(`.js-rules-link`);

  if (rulesElem) {
    rulesParagraphElems[rulesParagraphElems.length - 1].addEventListener(`animationend`, () => {
      rulesBtnElem.classList.remove(`visually-hidden`);
    });
  }
};
