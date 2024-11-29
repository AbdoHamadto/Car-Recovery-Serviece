import MySwiperComponent from "@layouts/partials/SwiperComponent";
import TypewriterEffect from "@layouts/partials/Typewriter";

const Page = () => {
  return (
    <>
      <div className="w-full bg-primary h-[calc(100vh-76px)] flex items-center justify-center text-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Welcome to Our Service</h3>
          <p className="text-lg mt-4">
            <TypewriterEffect
              words={[
                'We strive to be the number one choice for car breakdown services.',
                'Fast, reliable, and safe.',
              ]}
              typeSpeed={100}
              deleteSpeed={50}
              delayBetweenWords={1500}
            />
          </p>
        </div>
      </div>
      <MySwiperComponent />
    </>
  );
};

export default Page;
