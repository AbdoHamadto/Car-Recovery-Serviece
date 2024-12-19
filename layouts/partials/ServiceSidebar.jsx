"use client"

import menu from "@config/menu.json"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function ServiceSidebar() {
  const pathname = usePathname()
  console.log(pathname)
  const {serviceSidebar} = menu
  return (
    <div className="bg-theme-light w-1/3 p-3 rounded-lg h-fit ml-4 phone:w-full phone:ml-0">
      <div>
        <p className="text-xl font-bold pb-1">Our Services Menu</p>
        <div className="w-1/3 h-[2px] bg-primary mb-2"></div>
      </div>
      <ul>
        {serviceSidebar.map((item, index) => (
          <div key={index} className="relative overflow-hidden group mb-2">
            <Link href={`/our-services/${item.url}`}>
              <li className={`hover:text-primary pb-1 text-lg ${`${pathname}` === `/our-services/${item.url}` && 'text-primary'}`}>{item.name}</li>
            </Link>
            <div className={`absolute bottom-0 w-full h-[2px] bg-primary transition-all -translate-x-full group-hover:translate-x-0 ${`${pathname}` === `/our-services/${item.url}` && 'translate-x-0'} `}></div>
          </div>
        ))}
      </ul>
    </div>
  )
}
