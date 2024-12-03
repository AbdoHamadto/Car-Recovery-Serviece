import Image from 'next/image'

export default function ListOfSteps({header, list, description}) {
  return (
    <div className='bg-theme-light py-8'>
      <h2 className='w-4/6 mx-auto text-center mb-2'>{header}</h2>
      {description && <p className='w-4/6 mx-auto text-center'>{description}</p>}
      <div className='w-4/5 mx-auto flex justify-between flex-wrap'>
        {list.map((item, i) => (
          <div key={i} className='flex flex-col items-center mx-auto phone:w-1/2 phone:my-3 mt-4'>
            <Image 
              src={item.urlImage}
              height={60}
              width={60}
              alt=''
            />
            <p className='mt-2'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
