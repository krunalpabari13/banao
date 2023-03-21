import React from "react";
import SliderImg1 from "../assets/slider/sliderImg1.svg";
import SliderImg2 from "../assets/slider/sliderImg2.svg";

const Hero = () => {
  return (
    <section>
      <div className="px-[7.5rem] mt-[4.75rem] mb-[4.75rem]">
        <h1 className="text-[3.125rem] mb-5">Turnkey Solution For Everyone</h1>
        <p className="text-sm text-[#545454]">
          We are professionals who are experienced and deliver project of
          exceptional <br /> quality while staying on schedule and under budget.
        </p>
      </div>
      <div className="flex h-[30.938rem]">
        <img className="w-[80vw]" src={SliderImg1} alt="Hero image 1" />
        <img className="w-[20vw]" src={SliderImg2} alt="Hero image 2" />
      </div>
    </section>
  );
};

export default Hero;
