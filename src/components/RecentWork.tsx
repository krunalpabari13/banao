import React from "react";
import Rectangle1 from "../assets/home/recentWork/Rectangle1.svg";
import Rectangle4 from "../assets/home/recentWork/Rectangle4.svg";
import Rectangle5 from "../assets/home/recentWork/Rectangle5.svg";
import Rectangle6 from "../assets/home/recentWork/Rectangle6.svg";
import RedBox from "../assets/home/recentWork/RedBox.svg";

const RecentWork = () => {
  return (
    <div className="my-32">
      <div className="text-center">
        <h2 className="text-[2.625rem] text-[#4044E9] mb-5">
          Check our recent work
        </h2>
        <p className="text-sm text-[#545454] w-[22%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et magna.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-[13.75rem]">
        <img width="100%" className="col-span-2" src={Rectangle1} alt="recent work" />
        <img className="h-[50rem]" src={Rectangle5} alt="recent work" />
        <img width="100%" src={Rectangle6} alt="recent work" />
        <img width="100%" src={RedBox} alt="recent work" />
        <img width="100%" src={Rectangle4} alt="recent work" />
      </div>
    </div>
  );
};

export default RecentWork;



{/* <footer><div class="w-full lg:bg-[#F1F1EF] lg:flex items-center"><img src="/static/media/smMan.92dc5250b78f7dbd9c9b086d6490add4.svg" class="w-[630px] lg:ml-[120px] mx-auto lg:mx-0"><div class="px-5 lg:pl-8 bg-[#F1F1EF]"><h1 class="font-normal text-[28px] lg:text-[42px]">Get in touch</h1><p class="pt-3 lg:pt-5  text-[13px] lg:text-sm">Let’s discuss what’s next</p><form class="mt-[40px] max-w-[426px] mx-auto lg:mx-0"><div class="lg:flex gap-[15px]"><input type="text" name="name" id="name" autocomplete="off" placeholder="Your name" class="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full"><input type="email" name="email" id="email" autocomplete="off" placeholder="Your email" class="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[0px]"></div><div class="lg:flex gap-[15px]"><input type="text" name="phone" id="phone" autocomplete="off" placeholder="Phone number" class="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[20px]"><input type="text" name="pinCode" id="pinCode" autocomplete="off" placeholder="Post Code" class="mt:[10px] outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[20px]"></div><textarea name="text" id="text" placeholder="Text" class="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[20px] resize-none h-[109px]" spellcheck="false"></textarea><button class="text-white text-base py-2 w-full bg-[#CD4055] mt-[10px] lg:mt-[20px]">Send Message</button></form></div></div><div class="bg-[#444358] w-full px-5 py-10 md:px-[120px] md:py-[60px] mt-5 md:mt-0"><div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 grid-flow-row-dense pb-[72px] border-b border-white"><div class="md:col-start-1 md:col-end-4"><h3 class="text-white font-normal text-lg">Raghav BuidTech</h3><p class="text-[#AFAFAF] font-normal text-sm pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p><p class="text-[#DCDCDC] font-medium text-sm pt-6">Mobile number</p><p class="text-[#DCDCDC] font-medium text-sm pt-3">E-mail ID</p></div><div class="md:col-start-6 md:col-end-7 pt-5 md:pt-0"><h3 class="text-white font-normal text-lg">Navigation</h3><p class="text-[#AFAFAF] font-normal text-sm pt-4"><a href="/">Home</a></p><p class="text-[#AFAFAF] font-normal text-sm pt-4"><a href="/about-us">About us</a></p><p class="text-[#AFAFAF] font-normal text-sm pt-4"><a href="/services">Services</a></p><p class="text-[#AFAFAF] font-normal text-sm pt-4"><a href="/gallery">Gallery</a></p><p class="text-[#AFAFAF] font-normal text-sm pt-4"><a href="/contact">Contact us</a></p></div><div class="md:col-start-9 md:col-end-12 pt-5 md:pt-0"><h3 class="text-white font-normal text-lg">Links</h3><p class="text-[#AFAFAF] font-normal text-sm pt-4"><a href="/privacy-and-policy">Privacy and Policy</a></p><p class="text-[#AFAFAF] font-normal text-sm pt-4"><a href="/">Terms &amp; Conditions</a></p><p class="text-[#AFAFAF] font-normal text-sm pt-4"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Linkedin</a></p></div></div></div></footer> */}