"use client";
import Image from "next/image";

export default function NavBanner() {
  const handelClick = () => {
    alert("download app");
  };
  return (
    <div className="w-full bg-primary">
      <div className="container flex justify-between items-center phone:flex-col p-2">
        <div className="flex cursor-pointer phone:mb-2" onClick={handelClick}>
          <Image src="/images/email.png" alt="" width={30} height={30} />
          <a
            aria-label="email"
            href="mailto:arafatullah2030@gmail.com"
            className="ml-2 text-lg font-bold text-black"
          >
            arafatullah2030@gmail.com
          </a>
        </div>
        <div className="flex items-center cursor-pointer" onClick={handelClick}>
          <Image src="/images/call.png" alt="" width={30} height={30} />
          <a
            aria-label="phone"
            href="tel:+971562118782"
            className="ml-2 text-lg font-bold text-black mr-6"
          >
            +971 56 211 8782
          </a>
          <Image src="/images/24-hours.png" alt="" width={30} height={30} />
        </div>
      </div>
    </div>
  );
}
