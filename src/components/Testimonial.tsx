import React from "react";
import SliderImg1 from "../assets/slider/sliderImg1.svg";

const Testimonial = () => {
  return (
    <div className="relative">
      <img width="100%" height="100%" src={SliderImg1} alt="galler image" />
      <div className="absolute bottom-[9.563rem] top-[9.563rem] left-[14.063rem] pt-[3.813rem] px-9 bg-white text-black w-[30%]">
        <p className="">I've just lately learned about Raghav BuildTech's painting and cleaning services. The entire team tactfully delivered a project of exceptional quality while staying on schedule and under budget, I'm thrilled with the comprehensive service I received for my home being painted. We hope to work with Raghav BuildTech again in the near future!"</p>
        <p className="mt-8"><span className="font-medium">Katy Grey</span> | <span className="text-[#545454]">Grey industries</span></p>
      </div>
    </div>
  );
};

export default Testimonial;
