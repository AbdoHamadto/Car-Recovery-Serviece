import Image from "next/image";

const Section = ({urlImage = "/images/car.webp", altImg, head, paragraph, flex, reverse}) => {
  return (
    <div className={`flex w-4/6 mx-auto my-16 ${reverse && "flex-row-reverse phone:flex-col-reverse"} phone:flex-col phone:w-full `}> 
      <div className={`${reverse ? "ml-32" : "mr-32"} my-auto phone:mx-auto phone:w-4/5`}>
        <Image 
          src={urlImage}
          alt={altImg}
          width={400}
          height={400}
          className="rounded-lg w-full"
        />
      </div>
      <div className="w-2/4 phone:w-4/5 phone:mx-auto phone:text-center phone:my-4">
        <h2 className="mb-5">{head}</h2>
        <p className="mb-5">{paragraph}</p>        
        <div>
          {flex && flex.map((item, index) => (
            <div key={index} className="flex my-2 group">
              <input type="checkbox" defaultChecked={true} className="w-6 h-6 text-primary rounded-full group-hover:text-hoverPrimary"/>
              <p className="ml-2">{item}</p>
            </div>
          ))}
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-full text-lg font-bold mt-3 hover:bg-hoverPrimary">contact us</button>
      </div>
    </div>
  )
};

export default Section;
