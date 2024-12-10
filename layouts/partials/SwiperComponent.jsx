"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import customer from "@config/customer.json";

const MySwiperComponent = () => {
  return (
    <div className="w-full bg-theme-light py-10 my-16">
      <h3 className="text-center my-3">WHAT OUR CLIENTS SAY!</h3>
      <div className="w-4/5 mx-auto shadow-2xl rounded-lg">
        <AliceCarousel
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
          autoPlay
          autoPlayInterval={5000}
          infinite
          mouseTracking
          disableButtonsControls
        >
          {customer.map((item, i) => (
            <div className="p-4" key={i}>
              <div className="h-[450px] flex flex-col justify-around items-center border p-2 transition-colors duration-500 ease-in-out rounded-xl hover:-translate-y-2">
                <Image
                  src={item.urlImage}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <p className="leading-loose text-center">{item.description}</p>
                <p className="">{item.name}</p>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default MySwiperComponent;
