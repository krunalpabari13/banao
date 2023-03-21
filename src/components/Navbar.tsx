import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/header/Logo.svg";

const navLink = [
  {
    nav: "Home",
    link: "/",
  },
  {
    nav: "Services",
    link: "/services",
  },
  {
    nav: "Gallery",
    link: "/gallery",
  },
  {
    nav: "About us",
    link: "/about",
  },
  {
    nav: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
      <div className="flex items-center justify-between h-[4.063rem] border-b-[1px] border-black">
        <Link className="ml-[7.5rem]" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div>
          {navLink.map((nav) => (
            <Link className="uppercase mx-5 text-sm" to={nav.link}>
              {nav.nav}
            </Link>
          ))}
          <a
            className="bg-[#CD4055] px-5 py-6 h-[4.063rem] text-white text-sm"
            href="tel:+914444456765"
          >
            CALL: +91 4444-456-765
          </a>
        </div>
      </div>
  );
};

export default Navbar;
