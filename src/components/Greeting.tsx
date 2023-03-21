import React from "react";
import Sec from "../assets/home/sec.svg";
import Restoration from "../assets/home/greeting/restoration.svg";
import Renovation from "../assets/home/greeting/renovation.svg";
import Commercial from "../assets/home/greeting/commercial.svg";
import Repair from "../assets/home/greeting/repair.svg";

const Greeting = () => {
  return (
    <div className="bg-[#FEF0A9] grid grid-cols-2 items-center h-[39.375rem]">
      <img className="-mb-[4.6rem]" src={Sec} alt="section" />
      <div>
        <h1 className="text-[2.625rem] mb-5">Welcome to <br /> Raghav Buildtech</h1>
        <p className="text-[#404040] text-sm mb-[4.188rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
          eiusmod tempor incididunt ut labore et dolore <br /> magna consectetur
          adipiscing.
        </p>
        <div className="grid grid-cols-2 gap-10 text-[#404040] w-[65%]">
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
