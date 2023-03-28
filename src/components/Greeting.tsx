import React from "react";
import Sec from "../assets/home/sec.svg";
import Utility from "../assets/home/greeting/utility.svg";
import Quality from "../assets/home/greeting/quality.svg";
import Transparency from "../assets/home/greeting/transparency.svg";
import Adhering from "../assets/home/greeting/adhering.svg";
import OurService from "../assets/home/OurService.svg";

const Greeting = () => {
  return (
    <>
    <div className="bg-[#F1F1EF] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:hidden items-center h-[60rem] sm:h-[60rem] md:h-[65rem] lg:h-[39.375rem] pb-10 sm:pb-10 md:pb-12 lg:pb-0">
      <img className="mb-3 sm:mb-4 md:mb-10" src={Sec} alt="section" />
      <div className="">
        <h1 className="text-3xl md:text-4xl lg:text-[2.625rem] mb-5 ml-16 md:ml-24 lg:ml-0">
          Welcome to
          <br />
          Raghav BuildTech
        </h1>
        <p className="text-[#404040] text-sm mb-[4.188rem] w-[45%] ml-16 md:ml-24 lg:ml-0">
          Raghav BuildTech aspires to meet{" "}
          <span className="font-bold">on-demand repairs and renovation</span>{" "}
          requirements by drawing on their organizational skills & efficiency of
          handling the project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 text-[#404040] w-[40%] sm:w-[50%] md:w-[65%] mx-auto sm:mx-auto md:mx-auto lg:mx-0">
          <div className="flex items-center justify-start">
            <img src={Utility} alt="restoration" />
            <p className="ml-6">Utility of tech enabled platform</p>
          </div>
          <div className="flex items-center justify-start">
            <img src={Quality} alt="renovation" />
            <p className="ml-6">Quality and cost consciousness</p>
          </div>
          <div className="flex items-center justify-start">
            <img src={Transparency} alt="commercial" />
            <p className="ml-6">Transparency in all phases</p>
          </div>
          <div className="flex items-center justify-start">
            <img src={Adhering} alt="repair" />
            <p className="ml-6">Adhering to environmental friendly processes</p>
          </div>
        </div>
      </div>
    </div>
    <img width="100%" className="hidden lg:block" src={OurService} alt="our service" />
    </>
  );
};

export default Greeting;