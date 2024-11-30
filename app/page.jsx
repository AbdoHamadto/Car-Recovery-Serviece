import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import home from "@config/home.json"

import HomeBanner from "@layouts/partials/HomeBanner";
import FeaturesSection from "@layouts/partials/FeaturesSection";
import Section from "@layouts/partials/Section";
import TowingServiceSteps from "@layouts/partials/TowingServiceSteps";
import MySwiperComponent from "@layouts/partials/SwiperComponent";
import TypewriterEffect from "@layouts/partials/Typewriter";

const Home = async () => {
  const { title } = config.site;

  return (
    <>
      <SeoMeta title={title} />
      <HomeBanner />
      <TypewriterEffect
        words={[
          'Are You Need Help ?',
          'Call Now { Number }'
        ]}
        height="h-20"
        style="text-black font-bold text-xl"
      />
      <Section {...home.sectionOne} />
      <FeaturesSection {...home.featuresSection} />
      <Section {...home.sectionTwo} />
      <TowingServiceSteps />
      <Section {...home.sectionTwo} />
      <MySwiperComponent />
      <Section {...home.sectionTwo} />
      <TypewriterEffect
        words={[
          'Professional Services',
          'Fast, reliable, and safe.',
          'Reasonable Prices',
          '24/7 Availability',
          'Expert Services',
          'Reliable & Efficient',
          'Customer-Centered Approach',
          'Experienced Team',
          'Affordable & Transparent Pricing',
          'Innovative Solutions',
          'Trustworthy & Secure',
          'Fast Response Time',
          'Customer Satisfaction Guarantee',
          'Eco-Friendly Practices'
        ]}
        height="h-40"
        style="text-black font-bold text-lg"
        header='Why Choose Us ?'
      />
      <Section {...home.sectionTwo} />
    </>
  );
};

export default Home;
