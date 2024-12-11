import Image from "next/image";

const HomeBanner = ({
  urlImage,
  header,
  description,
  textButton = "Call Us Now",
  textHref = "https://api.whatsapp.com/send/?phone=971562118782&text&type=phone_number&app_absent=0",
  textAreaLabel = "whatsapp",
  headerTwo,
}) => {
  return (
    <>
      <div className="relative w-full bg-primary h-[calc(100vh-76px)] z-0">
        <Image
          src={urlImage}
          alt="truck"
          fill={true}
          className="absolute w-full h-full object-cover"
        />
        <div className="w-full h-[calc(100vh-76px)] bg-background-obacity text-white z-20 absolute flex items-center">
          <div className="container">
            <div className="w-[600px] phone:w-full">
              <h1 className="text-white text-6xl phone:text-4xl">{header}</h1>
              <h1 className="text-white text-6xl phone:text-4xl">{headerTwo}</h1>
              <p className="mt-4 mb-2">{description}</p>
              <a
                aria-label={textAreaLabel}
                href={textHref}
                className="inline-block bg-primary px-4 py-2 hover:bg-hoverPrimary text-lg font-bold mt-2"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {textButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
