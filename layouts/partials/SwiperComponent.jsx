"use client"

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import customer from '@config/customer.json'

const MySwiperComponent = () => {

  return (
    <div className='w-full bg-theme-light py-10 my-10'>
      <h3 className='text-center my-3'>WHAT OUR CLIENTS SAY!</h3>
      <div className='w-4/5 mx-auto shadow-2xl rounded-lg'>
        <AliceCarousel 
          autoPlay
          autoPlayInterval={5000}
          infinite
          mouseTracking
          disableButtonsControls
        >
          {customer.map((item, i) => (
            <div className='w-full p-4 flex phone:flex-col' key={i}>
              <div className='w-1/2 phone:w-full mr-2 phone:mb-2'>
                <div className='flex mb-2'>
                  <Image 
                    src={item.urlImage}
                    alt="Image 1" 
                    width={50} 
                    height={200} 
                    className='rounded-full mr-2' 
                  />
                  <div className='my-auto'>
                    <p>{item.name}</p>
                    <p>Custmor</p>
                  </div>
                </div>
                <hr className='my-2' />
                <p className='leading-loose'>{item.description}</p>
              </div>
              <div className='border-l pl-2 phone:border-t-2 phone:border-l-0 phone:pt-2 phone:pl-0'>
                <p className='text-xl font-bold text-black mb-2'>Problem: {item.problem}</p>
                <hr />
                <p className='text-lg font-bold text-black my-2'>Solution</p>
                <ul className='ml-6 list-disc'>
                  {item.solution.map((item, i) => (
                    <li className='mb-2' key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default MySwiperComponent;