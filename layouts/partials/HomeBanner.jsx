import Image from "next/image";

const HomeBanner = ({urlImage , header, description, textButton = "Call Us Now", headerTwo}) => {
  return (
    <>
      <div className="relative w-full bg-primary h-[calc(100vh-76px)] z-0">
        <Image
          src={urlImage}
          alt="truck"
          width={100}
          height={100}
          className="absolute w-full h-full"
        />
        <div className="w-full h-[calc(100vh-76px)] bg-background-obacity text-white z-20 absolute flex items-center">
          <div className="container">
            <div className="w-[600px] phone:w-full">
              <h1 className="text-white text-6xl">{header}</h1>
              <h1 className="text-white text-6xl">{headerTwo}</h1>
              <p className="mt-4 mb-2">{description}</p>
              <button className="bg-primary px-4 py-2 hover:bg-hoverPrimary text-lg font-bold mt-2">{textButton}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
