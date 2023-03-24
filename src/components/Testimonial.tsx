import React from "react";
import SliderImg1 from "../assets/slider/sliderImg1.svg";

const Testimonial = () => {
  return (
    <div className="relative">
      <img width="100%" src={SliderImg1} alt="gallery image" />
      <div className="absolute bottom-[1rem] md:bottom-[3rem] lg:bottom-[5rem] xl:bottom-[7rem] 2xl:bottom-[9.563rem] top-[1rem] md:top-[3rem] lg:top-[5rem] xl:top-[5rem] xl:top-[9.563rem] left-[3rem] md:left-[5rem] lg:left-[10rem] xl:left-[12rem] 2xl:left-[14.063rem] pt-[1rem] md:pt-[3rem] lg:pt-[3.813rem] px-9 bg-white text-black w-[85%] md:w-[75%] lg:w-[50%] xl:w-[45%] 2xl:w-[30%]">
        <p className="">I am delighted to see my refurbished home, transformed in a spectacular manner. The way the tiles have been laid, kitchen has been re-modelled and the hall has been given a face lift using best false ceiling concept with grouted LED lighting. Excellent execution and on time delivery. Kudos to RBT</p>
        <p className="mt-3 md:mt-5 lg:mt-16"><span className="font-medium">Deepak</span> | <span className="text-[#545454]">Yelahanka</span></p>
      </div>
    </div>
  );
};

export default Testimonial;
