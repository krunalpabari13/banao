import React, { useEffect, useState } from "react";
import SliderImg1 from "../assets/slider/sliderImg1.svg";
import SliderImg2 from "../assets/slider/sliderImg2.svg";
import SliderImg3 from "../assets/slider/sliderImg3.svg";

const slides = [
  {
    url: SliderImg1,
    author: "Abul",
  },
  {
    url: SliderImg2,
    author: "Babul",
  },
  {
    url: SliderImg3,
    author: "Cabul",
  },
];

const Testimonial = () => {
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
    <div className="relative bg-black">
      <img
        width="100%"
        className="opacity-50 h-[39.375rem]"
        src={slides[currentIndex].url}
        alt="gallery image"
      />

      <div className="absolute bottom-[2rem] md:bottom-[5rem] lg:bottom-[8rem] top-[8rem] md:top-[12rem] lg:top-[8rem] left-[3rem] md:left-[5rem] lg:left-[10rem] xl:left-[12rem] 2xl:left-[14.063rem] pt-[4rem] px-9 bg-white text-black w-[85%] md:w-[60%] lg:w-[45%] xl:w-[45%] 2xl:w-[30%]" data-aos="fade-right">
        <p className="">
          I am delighted to see my refurbished home, transformed in a
          spectacular manner. The way the tiles have been laid, kitchen has been
          re-modelled and the hall has been given a face lift using best false
          ceiling concept with grouted LED lighting. Excellent execution and on
          time delivery. Kudos to RBT
        </p>
        <p className="mt-24 md:mt-16 lg:mt-16">
          <span className="font-medium">{slides[currentIndex].author}</span> |{" "}
          <span className="text-[#545454]">Yelahanka</span>
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
