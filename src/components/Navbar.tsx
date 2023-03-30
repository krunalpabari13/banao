import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/header/Logo.svg";
import MenuOpen from "../assets/header/menuOpen.svg";
import SmLogo from "../assets/header/smLogo.svg";
import MenuClose from "../assets/header/menuClose.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="h-[56px] md:h-[65px] lg:pl-[120px] bg-white w-full flex items-center justify-between border-b-[1px] border-black relative">
      <button onClick={toggleMenu} className="lg:hidden">
        <img src={MenuOpen} alt="menuOpen" />
      </button>
      <Link to="/">
        <img
          src={SmLogo}
          alt="Logo"
          className="lg:hidden "
          data-aos="zoom-in-right"
        />
        <img
          src={Logo}
          alt="Logo"
          className="hidden lg:block"
          data-aos="zoom-in"
        />
      </Link>
      <div className="flex">
        <ul className="hidden lg:flex items-center me-auto">
          <li className="uppercase text-[10px] lg:text-sm">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#EEEEEE] py-[1.35rem] md:px-5" : "md:px-5"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="uppercase text-[10px] lg:text-sm">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#EEEEEE] py-[1.35rem] md:px-5" : "md:px-5"
              }
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li className="uppercase text-[10px] lg:text-sm">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#EEEEEE] py-[1.35rem] md:px-5" : "md:px-5"
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li className="uppercase text-[10px] lg:text-sm">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#EEEEEE] py-[1.35rem] md:px-5" : "md:px-5"
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li className="uppercase text-[10px] lg:text-sm">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#EEEEEE] py-[1.35rem] md:px-5" : "md:px-5"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="px-5 text-[10px] lg:text-sm text-white uppercase bg-[#CD4055] h-[56px] md:h-[65px]">
          <a href="tel:+918754502338">CALL: +91 87545-02338</a>
        </button>
      </div>

      {openMenu && (
        <ul className="lg:hidden items-center me-auto bg-white w-[200px] h-screen fixed left-0 bottom-0 top-0 z-10 pt-5 appbar ">
          <li className="mx-6 py-3 flex justify-end">
            <img onClick={toggleMenu} src={MenuClose} alt="menuClose" />
          </li>
          <li
            onClick={toggleMenu}
            className="uppercase text-[10px] lg:text-sm my-5"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#EEEEEE] px-6 py-3" : "px-6 py-3"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li
            onClick={toggleMenu}
            className="my-5 uppercase text-[10px] lg:text-sm"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#EEEEEE] px-6 py-3" : "px-6 py-3"
              }
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li
            onClick={toggleMenu}
            className="my-5 uppercase text-[10px] lg:text-sm"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#EEEEEE] px-6 py-3" : "px-6 py-3"
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li
            onClick={toggleMenu}
            className="my-5 uppercase text-[10px] lg:text-sm"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#EEEEEE] px-6 py-3" : "px-6 py-3"
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li
            onClick={toggleMenu}
            className="my-5 uppercase text-[10px] lg:text-sm"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#EEEEEE] px-6 py-3" : "px-6 py-3"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

{
  /* <nav className="h-[56px] md:h-[65px] lg:pl-[120px] bg-white w-full flex items-center justify-between border-b-[1px] border-black relative">
  <button className="lg:hidden">
    <img
      src="/static/media/menuOpen.c94d75a59d586899f4b37164b5646ea7.svg"
      alt="menuOpen"
    />
  </button>
  <a href="/">
    <img
      src="/static/media/smLogo.3ed63b23c97c6ed80c8da07843d7e9e7.svg"
      alt="Logo"
      className="lg:hidden "
    />
    <img
      src="/static/media/Logo.7b1bb5579056670e27c53adf641db82b.svg"
      alt="Logo"
      className="hidden lg:block"
    />
  </a>
  <div className="flex">
    <ul className="hidden lg:flex items-center me-auto ">
      <li className="md:mx-5 uppercase text-[10px] lg:text-sm">
        <a href="/">Home</a>
      </li>
      <li className="md:mx-5 uppercase text-[10px] lg:text-sm">
        <a href="/services">Services</a>
      </li>
      <li className="md:mx-5 uppercase text-[10px] lg:text-sm">
        <a href="/gallery">Gallery</a>
      </li>
      <li className="md:mx-5 uppercase text-[10px] lg:text-sm">
        <a href="/about-us">About Us</a>
      </li>
      <li className="md:mx-5 uppercase text-[10px] lg:text-sm">
        <a href="/contact">Contact</a>
      </li>
    </ul>
    <button className="px-5 text-[10px] lg:text-sm text-white uppercase bg-[#CD4055] h-[56px] md:h-[65px]">
      CALL: +91 87545-02338
    </button>
  </div>
  <ul className="lg:hidden items-center me-auto bg-white w-[200px] h-screen fixed left-0 bottom-0 top-0 z-10 pt-5 appbar ">
    <li className="mx-6 py-3 flex justify-end">
      <img
        src="/static/media/menuClose.0072ca5811bde215e3198db0d417fa05.svg"
        alt="menuClose"
      />
    </li>
    <li className="mx-6 py-3 uppercase text-[10px] lg:text-sm">
      <a href="/">Home</a>
    </li>
    <li className="mx-6 py-3 uppercase text-[10px] lg:text-sm">
      <a href="/services">Services</a>
    </li>
    <li className="mx-6 py-3 uppercase text-[10px] lg:text-sm">
      <a href="/gallery">Gallery</a>
    </li>
    <li className="mx-6 py-3 uppercase text-[10px] lg:text-sm">
      <a href="/about-us">About Us</a>
    </li>
    <li className="mx-6 py-3 uppercase text-[10px] lg:text-sm">
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>; */
}
