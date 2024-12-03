import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import home from "@config/home.json"

import HomeBanner from "@layouts/partials/HomeBanner";
import FeaturesSection from "@layouts/partials/FeaturesSection";
import Section from "@layouts/partials/Section";
import ListOfSteps from "@layouts/partials/ListOfSteps";
import MySwiperComponent from "@layouts/partials/SwiperComponent";
import TypewriterEffect from "@layouts/partials/Typewriter";
import BodyBanner from "@layouts/partials/bodyBanner";

const Home = async () => {
  const { title } = config.site;
  const { 
    homeBannerOne,
    homeBannerTwo,
    sectionOne, 
    sectionTwo, 
    sectionThree, 
    sectionFour, 
    sectionFive, 
    featuresSection, 
    TypewriterEffectOne, 
    TypewriterEffectTwo, 
    listOfSteps
  } = home

  return (
    <>
      <SeoMeta title={title} />
      <HomeBanner {...homeBannerOne}/>
      <TypewriterEffect {...TypewriterEffectOne}/>
      <Section {...sectionOne} />
      <FeaturesSection {...featuresSection} />
      <MySwiperComponent />
      <BodyBanner {...homeBannerTwo}/>
    </>
  );
};

export default Home;
