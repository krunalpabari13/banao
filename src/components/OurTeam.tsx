import React from "react";
import CEO from "../assets/about/ceo.svg";
import COE from "../assets/about/coe.svg";
import Eh from "../assets/about/eh.svg";
import ah from "../assets/about/ah.png"

const OurTeam = () => {
  return (
    <div className="p-5 lg:py-[120px] w-full max-w-[890px] mx-auto">
      <h1
        className="text-center lg:text-[42px] font-normal lg:mb-10"
        data-aos="fade-up"
      >
        Meet our amazing team
      </h1>
      <div className="w-full md:flex gap-3 ">
        <div data-aos="flip-right">
          <img src={CEO} className="w-[212px] md:w-full mt-5 lg:mt-0 mx-auto" />
          <h3 className="text-xl font-medium text-center mt-5">
            Raghavan Neelamegam
          </h3>
          <p className="text-center">Founder & CEO</p>
        </div>
        <div data-aos="zoom-in">
          <img src={COE} className="w-[212px] md:w-full mt-5 lg:mt-0 mx-auto" />
          <h3 className="text-xl font-medium text-center mt-5">
            Stephen Albert
          </h3>
          <p className="text-center">Operations Head</p>
        </div>
        <div data-aos="flip-left">
          <img src={Eh} className="w-[212px] md:w-full mt-5 lg:mt-0 mx-auto" />
          <h3 className="text-xl font-medium text-center mt-5">
            Vinayagam Krishnan
          </h3>
          <p className="text-center">Execution Head</p>
        </div>

        <div data-aos="flip-left">
          <img src={ah} className="w-[212px] md:w-full mt-5 lg:mt-0 mx-auto" />
          <h3 className="text-xl font-medium text-center mt-5">
            Anusha Kiran
          </h3>
          <p className="text-center">Architecture Head</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
