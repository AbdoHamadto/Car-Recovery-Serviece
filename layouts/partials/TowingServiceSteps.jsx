import Image from 'next/image'
import React from 'react'

const data = [
  "hi", "hi", "hi", "hi"
]

export default function TowingServiceSteps() {
  return (
    <div className='w-full '>
      <h2>mew mew</h2>
      <div className='flex'>
        {data.map((item, i) => (
          <div key={i} className=''>
            <Image 
              src='/images/phone-call.png'
              height={80}
              width={80}
              alt=''
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
