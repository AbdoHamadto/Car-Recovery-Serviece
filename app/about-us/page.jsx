import MySwiperComponent from "@layouts/partials/SwiperComponent";
import TypewriterEffect from "@layouts/partials/Typewriter";

const Page = () => {
  return (
    <>
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
