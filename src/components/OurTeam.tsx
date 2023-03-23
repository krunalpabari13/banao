import React from "react";
import CEO from "../assets/about/ceo.svg";
import COE from "../assets/about/coe.svg";
import Eh from "../assets/about/eh.svg";

const OurTeam = () => {
  return (
      <div className="p-5 lg:py-[120px] w-full max-w-[890px] mx-auto" >
      <h1 className="text-center lg:text-[42px] font-normal lg:mb-10">
        Meet our amazing team
      </h1>
      <div className="w-full lg:flex gap-3 ">
        <img src={CEO} className="w-[212px] lg:w-full mt-5 lg:mt-0 mx-auto" />
        <img src={COE} className="w-[212px] lg:w-full mt-5 lg:mt-0 mx-auto" />
        <img src={Eh} className="w-[212px] lg:w-full mt-5 lg:mt-0 mx-auto" />
      </div>
      </div>
  );
};

export default OurTeam;