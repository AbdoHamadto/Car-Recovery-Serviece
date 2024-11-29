import Image from "next/image";

const HomeBanner = () => {
  return (
    <>
      <div className="relative w-full bg-primary h-[calc(100vh-76px)] z-0">
        <Image
          src='/images/img.jpg'
          alt="truck"
          width={100}
          height={100}
          className="absolute w-full h-full"
        />
        <div className="w-full h-[calc(100vh-76px)] bg-background-obacity text-white z-20 absolute flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-white">Quick and Safe Car Recovery Dubai</h1>
            <p>Hire our quick and safe car recovery in Dubai. If you’re stuck in an undesired situation or your car’s not working, we’re here to assist and to keep your journey going smoothly.</p>
            <button className="bg-primary px-4 py-2 rounded-full text-lg font-bold mt-2">Call us now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
