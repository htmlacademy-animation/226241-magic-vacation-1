import AccentTypographyBuild from '../utils/AccentTypographyBuild';

export default () => {
  const animationIntroTitle = new AccentTypographyBuild(`.js-intro-title`, 500, `animated`, `transform`);
  setTimeout(()=>{
    animationIntroTitle.runAnimation();
  }, 500);


  const animationIntroDate = new AccentTypographyBuild(`.intro__date`, 1000, `animated`, `transform`);
  setTimeout(()=>{
    animationIntroDate.runAnimation();
  }, 1000);
};
