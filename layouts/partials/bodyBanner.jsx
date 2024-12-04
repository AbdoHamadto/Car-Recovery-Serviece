import Image from "next/image";

export default function BodyBanner({urlImage , header, description, textButton}) {
  return (
    <>
      <div className="relative w-full bg-primary h-96 z-0">
        <Image
          src={urlImage}
          alt="truck"
          width={100}
          height={100}
          className="absolute w-full h-full"
        />
        <div className="w-full h-96 bg-background-obacity text-white z-20 absolute flex justify-center items-center">
          <div className="text-center w-4/5 mx-auto">
            <h1 className="text-white">{header}</h1>
            <div>
              {description.map((item, index) => <p key={index} className="font-bold text-xl mb-2">{item}</p>)}
            </div>
            {textButton && <button className="bg-primary px-4 py-2 rounded-full text-lg font-bold mt-2">{textButton}</button> }
          </div>
        </div>
      </div>
    </>
  )
}
