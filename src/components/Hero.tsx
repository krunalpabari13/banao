import React from "react";
import SliderImg1 from "../assets/slider/sliderImg1.svg";
import SliderImg2 from "../assets/slider/sliderImg2.svg";

const Hero = () => {
  return (
    <section>
      <div className="px-5 md:px-8 lg:px-[7.5rem] my-5 md:my-8 lg:my-[4.75rem]">
        <h1 className="font-normal text-3xl md:text-4xl lg:text-[3.125rem] mb:3 md:mb-4 lg:mb-5">Turnkey Solution For Everyone</h1>
        <p className="text-sm text-[#545454] w-[100%] md:w-[70%] lg:w-[50%]">
          We are professionals who are experienced and deliver project of
          exceptional quality while staying on schedule and under budget.
        </p>
      </div>
      <div className="flex h-[20rem] md:h-[25rem] lg:h-[30.938rem]">
        <img className="w-[80vw]" src={SliderImg1} alt="Hero image 1" />
        <img className="w-[20vw]" src={SliderImg2} alt="Hero image 2" />
      </div>
    </section>
  );
};

export default Hero;
