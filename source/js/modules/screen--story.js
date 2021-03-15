import AccentTypographyBuild from '../utils/AccentTypographyBuild';

export default () => {
    const animationIntroDate = new AccentTypographyBuild(`.slider__item-title`, 1000, `animated`, `transform`);
    setTimeout(()=>{
        animationIntroDate.runAnimation();
    }, 500);
};