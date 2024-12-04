import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import home from "@config/home.json"

import HomeBanner from "@layouts/partials/HomeBanner";
import FeaturesSection from "@layouts/partials/FeaturesSection";
import Section from "@layouts/partials/Section";
import TypewriterEffect from "@layouts/partials/Typewriter";
import BodyBanner from "@layouts/partials/bodyBanner";

import dynamic from "next/dynamic";
const MySwiperComponent = dynamic(() => import('@layouts/partials/SwiperComponent'), { ssr: false });
const Map = dynamic(() => import("@layouts/partials/Map"), { ssr: false });

const Home = async () => {
  const { title } = config.site;
  const { 
    homeBannerOne,
    bodyBanner,
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
      <BodyBanner {...bodyBanner}/>
      <Map />
    </>
  );
};

export default Home;
