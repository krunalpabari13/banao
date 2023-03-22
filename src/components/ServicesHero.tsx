import React from "react";
import SmServices from "../assets/services/smServices.svg";
import LgServices from "../assets/services/lgServices.svg";

const ServicesHero = () => {
  return (
    <div>
      <div className="lg:flex justify-between px-5 lg:pl-[120px] lg:pr-[88px] py-[40px] lg:py-[76px] ">
        <h1 className="font-normal text-[34px] lg:text-[50px] max-w-[325px]">
          Our Services!
        </h1>
        <p className="text-[#545454] font-normal text-[13px] text-sm max-w-[622px] lg:mt-10">
          Our approach is unique: it aims to build a long-term relationship.
          Maintaining your space is essential to preserve its value and we work
          with you to make your dreams into reality.
        </p>
      </div>
      <img src={SmServices} alt="smServices" className="w-full lg:hidden" />
      <img
        src={LgServices}
        alt="lgServices"
        className="w-full hidden lg:block"
      />
      <div className="lg:flex justify-between px-5 lg:pl-[120px] lg:pr-[88px] py-[40px] lg:py-[76px] ">
        <h1 className="font-normal text-[34px] lg:text-[42px] max-w-[506px]">
          There are no ordinary projects, only extraordinary situations.
        </h1>
        <div className="max-w-[626px]">
          <p className="text-[#545454] font-normal text-[13px] lg:text-base">
            In addition to undertaking construction of new building /
            residential units and setting up of advanced Radiology and pathology
            diagnostic centers, Raghav BuildTech also focuses on providing
            reliable turnkey solutions ( minor projects) to repairs and
            renovations of toilets and wash rooms, retro fitment of lifts and
            automatic garage doors, external and internal painting of the entire
            house / apartment complex, construction of RCC retaining walls and
            compound wall structures, repairs of commercial buildings, water
            proofing services, installation of CCTV cameras and Automatic fire
            alarm systems &amp; smoke detectors.
          </p>
          <p className="text-[#545454] font-normal text-[13px] lg:text-base pt-10">
            RBT believes in OTIF (On time in Full) concept to complete the
            projects and avoids cost overrun and time over run.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
