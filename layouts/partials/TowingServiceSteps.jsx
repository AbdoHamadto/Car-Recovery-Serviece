import Image from 'next/image'
import React from 'react'

const data = [
  "Contact Us", "On Time Arrival", "On Site Assessment", "Vehicle Recovery"
]

export default function TowingServiceSteps() {
  return (
    <div className='bg-theme-light py-8'>
      <h2 className='w-4/6 mx-auto text-center mb-8'>How To Avail Our Car Towing Service in Dubai?</h2>
      <div className='w-4/5 mx-auto flex justify-between flex-wrap'>
        {data.map((item, i) => (
          <div key={i} className='flex flex-col items-center mx-auto phone:w-1/2 phone:my-3'>
            <Image 
              src='/images/phone-call.png'
              height={60}
              width={60}
              alt=''
            />
            <p className='mt-2'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
