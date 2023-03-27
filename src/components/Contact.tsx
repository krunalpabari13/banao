import React from "react";
import SmMan from "../assets/footer/smMan.svg";

const Contact = () => {
  return (
    <div className="w-full lg:bg-[#F1F1EF] lg:flex items-center">
      <img
        src={SmMan}
        className="w-[630px] lg:ml-[120px] mx-auto lg:mx-0"
      />
      <div className="px-5 lg:pl-8 bg-[#F1F1EF]">
        <h1 className="font-normal text-[28px] lg:text-[42px] text-center md:text-center lg:text-start pt-5 lg:pt-0">Get in touch</h1>
        <p className="pt-1 text-[13px] lg:text-base text-center md:text-center lg:text-start">
          Let’s discuss what’s next
        </p>
        <form className="mt-[40px] max-w-[426px] mx-auto lg:mx-0 mb-5 md:mb-8 lg:mb-0">
          <div className="lg:flex gap-[15px]">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[0px]"
            />
          </div>
          <div className="lg:flex gap-[15px]">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone number"
              className="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[20px]"
            />
            <input
              type="text"
              name="pinCode"
              id="pinCode"
              placeholder="Post Code"
              className="mt:[10px] outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[20px]"
            />
          </div>
          <textarea
            name="text"
            id="text"
            placeholder="Text"
            className="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[20px] resize-none h-[109px]"
          ></textarea>
          <button className="text-white text-base py-2 w-full bg-[#CD4055] mt-[10px] lg:mt-[20px]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
