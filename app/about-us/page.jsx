import HomeBanner from "@layouts/partials/HomeBanner";
import TypewriterEffect from "@layouts/partials/Typewriter";
import aboutUs from "@config/about-us.json"
import Section from "@layouts/partials/Section";

import dynamic from "next/dynamic";
const MySwiperComponent = dynamic(() => import('@layouts/partials/SwiperComponent'), { ssr: false });

const Page = () => {
  const { homeBanner, sectionOne, typeWriter} = aboutUs
  return (
    <>
      <HomeBanner {...homeBanner} />
      <TypewriterEffect {...typeWriter} />
      <Section {...sectionOne}/>
      <MySwiperComponent />
    </>
  );
};

export default Page;
