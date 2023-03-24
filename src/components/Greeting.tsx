import React from "react";
import Sec from "../assets/home/sec.svg";
import Restoration from "../assets/home/greeting/restoration.svg";
import Renovation from "../assets/home/greeting/renovation.svg";
import Commercial from "../assets/home/greeting/commercial.svg";
import Repair from "../assets/home/greeting/repair.svg";

const Greeting = () => {
  return (
    <div className="bg-[#F1F1EF] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center h-[60rem] sm:h-[60rem] md:h-[39.375rem]">
      <img className="mb-3 sm:mb-4 md:-mb-[4.6rem]" src={Sec} alt="section" />
      <div className="text-center sm:text-center md:text-start">
        <h1 className="text-3xl md:text-4xl lg:text-[2.625rem] mb-5">Welcome to <br /> Raghav Buildtech</h1>
        <p className="text-[#404040] text-sm mb-[4.188rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
          eiusmod tempor incididunt ut labore et dolore <br /> magna consectetur
          adipiscing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 text-[#404040] w-[40%] sm:w-[50%] md:w-[65%] mx-auto sm:mx-auto md:mx-0">
          <div className="flex items-center justify-start">
            <img src={Restoration} alt="restoration" />
            <p className="ml-6">Restoration - Lorem <br /> Ipsum Plus point</p>
          </div>
          <div className="flex items-center justify-start">
            <img src={Renovation} alt="renovation" />
            <p className="ml-6">Renovation - Lorem <br /> Ipsum Plus point</p>
          </div>
          <div className="flex items-center justify-start">
            <img src={Commercial} alt="commercial" />
            <p className="ml-6">Commercial - Lorem <br /> Ipsum Plus point</p>
          </div>
          <div className="flex items-center justify-start">
            <img src={Repair} alt="repair" />
            <p className="ml-6">Repair - Lorem <br /> Ipsum Plus point</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
