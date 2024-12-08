import Image from "next/image";

export default function OurServices({ title, urlImage, description }) {
  return (
    <div className="w-2/3 phone:w-full phone:mb-4">
      <h3 className="mb-4">{title}</h3>
      <div className="w-full h-fit">
        <Image 
          src={urlImage}
          alt="service"
          width={700}
          height={300}
          // className="w-full h-80"
        />
      </div>
      <div>{description.map((item, index) => (<p className="mt-2" key={index}>{item}</p>))}</div>
    </div>
  )
}
