import CustomForm from '@layouts/partials/Form'
import Image from 'next/image'
import React from 'react'
import { Toaster } from "react-hot-toast";

export default function ContactUs() {
  return (
    <div className='container my-6'>
      <Toaster position="top-right" />
      <h2 className='phone:text-2xl'>Contact Us</h2>
      <p className='text-lg mt-3 mb-6 phone:text-sm'>We’d love to hear from you. Please fill out this form</p>
      <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="mr-6 phone:mx-auto">
        <CustomForm />
      </div>
      <div className='mx-auto my-auto phone:mt-8'>
        <Image 
          src="/images/car.webp"
          alt=''
          width={500}
          height={500}
        />
      </div>
    </div>
    </div>
  )
}
