import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import home from "@config/home.json"

import HomeBanner from "@layouts/partials/HomeBanner";
import FeaturesSection from "@layouts/partials/FeaturesSection";
import Section from "@layouts/partials/Section";
import TowingServiceSteps from "@layouts/partials/TowingServiceSteps";
import MySwiperComponent from "@layouts/partials/SwiperComponent";

const Home = async () => {
  const { title } = config.site;

  return (
    <>
      <SeoMeta title={title} />
      <HomeBanner />

      <Section {...home.sectionOne} />
      <FeaturesSection {...home.featuresSection} />
      <Section {...home.sectionTwo} />
      <TowingServiceSteps />
      <MySwiperComponent />
    </>
  );
};

export default Home;
