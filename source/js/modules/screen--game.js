import AccentTypographyBuild from '../utils/AccentTypographyBuild';

export default () => {
    const animationIntroDate = new AccentTypographyBuild(`.game__title`, 1000, `animated`, `transform`);
    setTimeout(()=>{
        animationIntroDate.runAnimation();
    }, 500);
};