import React from "react";
import Phone from "../assets/contact/phone.svg";
import Location from "../assets/contact/location.svg";
import Mail from "../assets/contact/mail.svg";

const ContactDetails = () => {
  return (
    <div className="w-full lg:flex justify-between mx-auto px-5 lg:px-[150px] py-5">
      <div className="w-[280px] ">
        <div className="flex items-center pb-3">
          <img src={Phone} alt="phone" className="mr-3" />
          <p className="font-semibold text-[20px] text-[#545454]">Phone</p>
        </div>
        <p className="pl-8 text-sm font-normal">
          <a href="tel:+918754502338">+91 875-450-2338</a>
        </p>
        <p className="pl-8 text-sm font-normal">
          <a href="tel:+918754502338">+91 875-450-2338</a>
        </p>
      </div>
      <div className="w-[280px] mt-5 lg:mt-0">
        <div className="flex items-center pb-3">
          <img src={Location} alt="location" className="mr-3" />
          <p className="font-semibold text-[20px] text-[#545454]">Office</p>
        </div>
        <p className="pl-8 text-sm font-normal">
          #173, Ragini, 2A Main Road, Block 7, Nagarabhavi 2nd Stage, Bangalore
          - 560072
        </p>
      </div>
      <div className="w-[280px] mt-5 lg:mt-0">
        <div className="flex items-center pb-3">
          <img src={Mail} alt="mail" className="mr-3" />
          <p className="font-semibold text-[20px] text-[#545454]">Chat</p>
        </div>
        <p className="pl-8 text-sm font-normal">
          <a href="mailto:ragainn@gmail.com">ragainn@gmail.com</a>
        </p>
        <p className="pl-8 text-sm font-normal">
          <a href="mailto:ragainn@gmail.com">ragainn@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
