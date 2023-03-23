import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <img src={SmLogo} alt="Logo" className="lg:hidden " />
        <img src={Logo} alt="Logo" className="hidden lg:block" />
      </Link>
      <div className="flex">
        <ul className="hidden lg:flex items-center me-auto ">
          <li className="md:mx-5 uppercase text-[10px] lg:text-sm">
            <Link to="/">Home</Link>
          </li>
          <li className="md:mx-5 uppercase text-[10px] lg:text-sm">
            <Link to="/services">Services</Link>
          </li>
          <li className="md:mx-5 uppercase text-[10px] lg:text-sm">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="md:mx-5 uppercase text-[10px] lg:text-sm">
            <Link to="/about">About Us</Link>
          </li>
          <li className="md:mx-5 uppercase text-[10px] lg:text-sm">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button className="px-5 text-[10px] lg:text-sm text-white uppercase bg-[#CD4055] h-[56px] md:h-[65px]">
          CALL: +91 87545-02338
        </button>
      </div>

      {openMenu && (
        <ul className="lg:hidden items-center me-auto bg-white w-[200px] h-screen fixed left-0 bottom-0 top-0 z-10 pt-5 appbar ">
          <li className="mx-6 py-3 flex justify-end">
            <img onClick={toggleMenu} src={MenuClose} alt="menuClose" />
          </li>
          <li onClick={toggleMenu} className="mx-6 py-3 uppercase text-[10px] lg:text-sm">
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleMenu} className="mx-6 py-3 uppercase text-[10px] lg:text-sm">
            <Link to="/services">Services</Link>
          </li>
          <li onClick={toggleMenu} className="mx-6 py-3 uppercase text-[10px] lg:text-sm">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li onClick={toggleMenu} className="mx-6 py-3 uppercase text-[10px] lg:text-sm">
            <Link to="/about">About Us</Link>
          </li>
          <li onClick={toggleMenu} className="mx-6 py-3 uppercase text-[10px] lg:text-sm">
            <Link to="/contact">Contact</Link>
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
