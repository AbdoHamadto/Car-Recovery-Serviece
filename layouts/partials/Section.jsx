import Image from "next/image";
// import car from '/images/car.webp';

const Section = ({urlImg, altImg, head, paragraph, flex, reverse}) => {
  return (
    <div className={`flex w-4/6 mx-auto my-16 ${reverse && "flex-row-reverse phone:flex-col-reverse"} phone:flex-col phone:w-full `}> 
      <div className={`${reverse ? "ml-32" : "mr-32"} my-auto phone:mx-auto phone:w-4/5`}>
        <Image 
          src="/images/car.webp"
          // src={urlImg}
          alt={altImg}
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="w-2/4 phone:w-4/5 phone:mx-auto">
        <h2 className="mb-5">{head}</h2>
        {paragraph.map((item, index) => <p key={index} className="mb-5">{item}</p>)}
        <div className="flex">
          {flex.map((item, index) => <p key={index} className="mr-4">{item}</p>)}
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="bg-primary text-white px-6 py-3 rounded-full text-lg font-bold mt-3">contact us</button>
        </div>
      </div>
    </div>
  )
};

export default Section;
