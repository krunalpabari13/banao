import React from "react";
import Sec from "../assets/home/sec.svg";
import Utility from "../assets/home/greeting/utility.svg";
import Quality from "../assets/home/greeting/quality.svg";
import Transparency from "../assets/home/greeting/transparency.svg";
import Adhering from "../assets/home/greeting/adhering.svg";

const Greeting = () => {
  return (
    <div className="bg-[#F1F1EF] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center h-[60rem] sm:h-[60rem] md:h-[39.375rem]">
      <img className="mb-3 sm:mb-4 md:-mb-[4.6rem]" src={Sec} alt="section" />
      <div className="text-center sm:text-center md:text-start">
        <h1 className="text-3xl md:text-4xl lg:text-[2.625rem] mb-5">
          Welcome to
          <br />
          Raghav BuildTech
        </h1>
        <p className="text-[#404040] text-sm mb-[4.188rem] w-[45%]">
          Raghav BuildTech aspires to meet{" "}
          <span className="font-bold">on-demand repairs and renovation</span>{" "}
          requirements by drawing on their organizational skills & efficiency of
          handling the project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 text-[#404040] w-[40%] sm:w-[50%] md:w-[65%] mx-auto sm:mx-auto md:mx-0">
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
  );
};

export default Greeting;
