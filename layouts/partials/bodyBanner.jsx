import Image from "next/image";

export default function BodyBanner({
  urlImage,
  header,
  description,
  textButton,
}) {
  return (
    <>
      <div className="relative w-full bg-primary h-96 z-0 bg-cover">
        <Image
          src={urlImage}
          alt="truck"
          // width={100}
          // height={100}
          fill
          className="absolute w-full h-full object-cover"
        />
        <div className="w-full h-96 bg-background-obacity text-white z-20 absolute flex justify-center items-center">
          <div className="text-center w-4/5 mx-auto">
            <p className="text-white text-6xl font-bold">{header}</p>
            <div className="mt-3">
              {description.map((item, index) => (
                <p key={index} className="font-bold text-2xl mb-3">
                  {item}
                </p>
              ))}
            </div>
            {textButton && (
              <a
                aria-label="phone"
                href="tel:+971562118782"
                className="bg-primary px-4 py-2 rounded-full text-lg font-bold mt-2"
              >
                {textButton}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
