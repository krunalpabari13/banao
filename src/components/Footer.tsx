import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#444358] w-full px-5 py-10 md:px-[120px] md:py-[60px] mt-5 md:mt-0">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 grid-flow-row-dense pb-[72px] border-b border-white">
        <div className="md:col-start-1 md:col-end-4">
          <h3 className="text-white font-normal text-lg">Raghav BuidTech</h3>
          <p className="text-[#AFAFAF] font-normal text-sm pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <p className="text-[#DCDCDC] font-medium text-sm pt-6">
            Mobile number
          </p>
          <p className="text-[#DCDCDC] font-medium text-sm pt-3">E-mail ID</p>
        </div>
        <div className="md:col-start-6 md:col-end-7 pt-5 md:pt-0">
          <h3 className="text-white font-normal text-lg">Navigation</h3>
          <p className="text-[#AFAFAF] font-normal text-sm pt-4">
            <Link to="/">Home</Link>
          </p>
          <p className="text-[#AFAFAF] font-normal text-sm pt-4">
            <Link to="/about">About us</Link>
          </p>
          <p className="text-[#AFAFAF] font-normal text-sm pt-4">
            <Link to="/services">Services</Link>
          </p>
          <p className="text-[#AFAFAF] font-normal text-sm pt-4">
            <Link to="/gallery">Gallery</Link>
          </p>
          <p className="text-[#AFAFAF] font-normal text-sm pt-4">
            <Link to="/contact">Contact us</Link>
          </p>
        </div>
        <div className="md:col-start-9 md:col-end-12 pt-5 md:pt-0">
          <h3 className="text-white font-normal text-lg">Links</h3>
          <p className="text-[#AFAFAF] font-normal text-sm pt-4">
            <Link to="/privacyPolicy">Privacy and Policy</Link>
          </p>
          <p className="text-[#AFAFAF] font-normal text-sm pt-4">
            <a href="/">Terms &amp; Conditions</a>
          </p>
          <p className="text-[#AFAFAF] font-normal text-sm pt-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
