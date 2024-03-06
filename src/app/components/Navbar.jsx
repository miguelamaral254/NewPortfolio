"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "", // 
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className="fixed w-full border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="container mx-auto lg:px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex md:space-x-8 ">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                {link.path === "" ? (
                  <a
                    onClick={scrollToTop}
                    className="text-white hover:text-primary-400 cursor-pointer"
                  >
                    {link.title}
                  </a>
                ) : (
                  <ScrollLink
                    to={link.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white hover:text-primary-400 cursor-pointer"
                  >
                    {link.title}
                  </ScrollLink>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        {navbarOpen && <MenuOverlay links={navLinks} />}
      </div>
    </nav>
  );
};

export default Navbar;
