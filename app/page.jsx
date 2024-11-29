import config from "@config/config.json";
import Cta from "@layouts/components/Cta";
import SeoMeta from "@layouts/SeoMeta";
import home from "@config/home.json"

import HomeBanner from "@layouts/partials/HomeBanner";
import FeaturesSection from "@layouts/partials/FeaturesSection";
import Workflow from "@layouts/partials/Workflow";
import { getListPage } from "../lib/contentParser";
import Section from "@layouts/partials/Section";
import TowingServiceSteps from "@layouts/partials/TowingServiceSteps";
import MySwiperComponent from "@layouts/partials/SwiperComponent";

const Home = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
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
