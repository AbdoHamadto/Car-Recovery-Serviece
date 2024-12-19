"use client";

import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import config from "@config/config.json";
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const pathname = usePathname();

  const { main } = menu;

  const [navOpen, setNavOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  const { logo } = config.site;

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="header">
      <nav className="navbar container">
        <div 
          className="order-0"
          onClick={() => {
            setNavOpen(false)
            setListOpen(false)
          }}
        >
          <Logo src={logo} />
        </div>

        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:order-1 md:hidden"
          onClick={() => {
            setNavOpen(!navOpen)
            setListOpen(false)
          }}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        <div
          id="nav-menu"
          className={`order-3 md:order-1 ${
            navOpen ? "max-h-[1000px]" : "max-h-0 phone:overflow-hidden"
          }`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li 
                    className="nav-item nav-dropdown relative group cursor-pointer"
                    onClick={() => setListOpen(!listOpen)}
                  >
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className={`h-4 w-4 fill-current transition-all duration-500 group-hover:rotate-180 ${listOpen && "phone:rotate-180"} `} viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    {isMobile ? 
                      <ul className={`nav-list ${listOpen && 'phone:relative phone:opacity-100 phone:h-[300px] phone:w-full phone:mt-4'}`}>
                        {menu.children.map((child, i) => (
                          <li className={`p-1 border-b hover:text-primary hidden group-hover:block rounded ${listOpen && 'phone:block'}`} key={`children-${i}`}>
                            <Link
                              href={`/our-services/${child.url}`}
                              className="nav-dropdown-link block"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    :
                      <ul className="nav-list">
                        {menu.children.map((child, i) => (
                          <li className="p-1 border-b hover:text-primary hidden group-hover:block rounded" key={`children-${i}`}>
                            <Link
                              href={`/our-services/${child.url}`}
                              className="nav-dropdown-link block"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    }
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`nav-link block ${
                        pathname === menu.url ? "nav-link-active" : ""
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
