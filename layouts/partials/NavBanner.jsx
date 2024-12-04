"use client"
import Image from "next/image"

export default function NavBanner() {
  const handelClick = () => {
    alert("download app")
  }
  return (
    <div className='w-full bg-primary'>
      <div className='container h-12 flex justify-between items-center'>
        <div className="flex cursor-pointer" onClick={handelClick}>
          <Image
            src='/images/email.png'
            alt=""
            width={30}
            height={30}
          />
          <p className="ml-2 text-lg font-bold text-black">car@example.com</p>
        </div>
        <div className="flex items-center cursor-pointer" onClick={handelClick}>
          <Image
            src='/images/call.png'
            alt=""
            width={30}
            height={30}
          />
          <p className="ml-2 text-lg font-bold text-black mr-6">+12345678</p>
          <Image
            src='/images/24-hours.png'
            alt=""
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  )
}
