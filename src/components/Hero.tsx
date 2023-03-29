import React, { useEffect, useState } from "react";
import SliderImg1 from "../assets/slider/sliderImg1.svg";
import SliderImg2 from "../assets/slider/sliderImg2.svg";

const slides = [
  {
    url: SliderImg1,
  },
  {
    url: SliderImg2,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section>
      <div className="px-5 md:px-8 lg:px-[7.5rem] my-5 md:my-8 lg:my-[4.75rem]" data-aos="fade-up">
        <h1 className="font-normal text-3xl md:text-4xl lg:text-[3.125rem] mb:3 md:mb-5 lg:mb-9">
          Turnkey Solution For Every Project
        </h1>
        <p className="text-sm text-[#545454] w-[100%] md:w-[70%] lg:w-[50%]">
          We are professionals who are experienced and deliver project of
          exceptional quality while staying on schedule and under budget.
        </p>
      </div>
      <div className="flex h-[20rem] md:h-[25rem] lg:h-[30.938rem]" data-aos="fade-up">
        {slides.map((slide, index) => (
          <img
            width="100%"
            key={index}
            className={`absolute h-[20rem] md:h-[25rem] lg:h-[30.938rem] transition-all duration-1000 ${
              currentIndex === index ? "left-0 opacity-100" : "opacity-0"
            }`}
            src={slide.url}
            alt={`Hero image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
