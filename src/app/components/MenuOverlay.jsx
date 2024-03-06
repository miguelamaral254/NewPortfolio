"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const MenuOverlay = ({ links }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <ul className="flex flex-col py-4 items-center justify">
      {links.map((link, index) => (
        <li key={index} className="w-2/4 justify-center align-middle flex-1 text-center mb-2">
          {link.path === "" ? (
            <ScrollLink
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={scrollToTop}
              className="text-white hover:text-primary-400 cursor-pointer"
            >
              {link.title}
              <hr />
            </ScrollLink>
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
              <hr />
            </ScrollLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
