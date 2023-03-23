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
        <p className="pl-8 text-sm font-normal">+91 994-134-4529</p>
        <p className="pl-8 text-sm font-normal">+91 994-134-4529</p>
      </div>
      <div className="w-[280px] mt-5 lg:mt-0">
        <div className="flex items-center pb-3">
          <img src={Location} alt="location" className="mr-3" />
          <p className="font-semibold text-[20px] text-[#545454]">Office</p>
        </div>
        <p className="pl-8 text-sm font-normal">
          Address 1 - Lorem ipsum dolor sit amet, consectetur adipiscing aliqua.
        </p>
      </div>
      <div className="w-[280px] mt-5 lg:mt-0">
        <div className="flex items-center pb-3">
          <img src={Mail} alt="mail" className="mr-3" />
          <p className="font-semibold text-[20px] text-[#545454]">Chat</p>
        </div>
        <p className="pl-8 text-sm font-normal">hi@contactmenow.com</p>
        <p className="pl-8 text-sm font-normal">hi@contactmelater.com</p>
      </div>
    </div>
  );
};

export default ContactDetails;
