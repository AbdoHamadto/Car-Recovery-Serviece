import HomeBanner from "@layouts/partials/HomeBanner";
import MySwiperComponent from "@layouts/partials/SwiperComponent";
import TypewriterEffect from "@layouts/partials/Typewriter";
import aboutUs from "@config/about-us.json"
import Section from "@layouts/partials/Section";
import ListOfSteps from "@layouts/partials/ListOfSteps";

const Page = () => {
  const { homeBanner, sectionOne, listOfSteps} = aboutUs
  return (
    <>
      <HomeBanner {...homeBanner} />
      <Section {...sectionOne}/>
      <ListOfSteps {...listOfSteps} />
      <TypewriterEffect
        words={[
          'We strive to be the number one choice for car breakdown services.',
          'Fast, reliable, and safe.',
        ]}
      />
      <MySwiperComponent />
    </>
  );
};

export default Page;
