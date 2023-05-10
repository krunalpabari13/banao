import React from "react";
import MainTaince from "../assets/services/icons/mainTaince.svg";
import Roller from "../assets/services/icons/roller.svg";
import Renovation from "../assets/services/icons/renovation.svg";
import Machin from "../assets/services/icons/machin.svg";
import Arrow from "../assets/services/icons/Arrow.svg";
import ConstructionImg from "../assets/services/construction.svg";
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 lg:col-start-2 col-end-13 lg:col-end-6 self-center px-5 lg:px-0 mt-5 lg:mt-0" data-aos="fade-down">
        <h1 className="font-normal text-[28px] lg:text-[42px]">Construction</h1>
        <p className="text-[13px] lg:text-sm font-normal pt-3 lg:pt-5 text-[#545454]">
          Trustworthy qualified efficient masons and fabricators.
        </p>
        <ul className="mt-10">
          <li className="flex items-center pb-3 lg:pb-5">
            <img src={MainTaince} alt="mainTaince" className="mr-2" />
            <p className="font-normal text-[13px] lg:text-sm">
              Maintenance and repair of old structures
            </p>
          </li>
          <li className="flex items-center pb-3 lg:pb-5">
            <img src={Roller} alt="roller" className="mr-2" />
            <p className="font-normal text-[13px] lg:text-sm">
              Construction of new building
            </p>
          </li>
          <li className="flex items-center pb-3 lg:pb-5">
            <img src={Renovation} alt="renovation" className="mr-2" />
            <p className="font-normal text-[13px] lg:text-sm">Residential</p>
          </li>
          <li className="flex items-center pb-5 lg:pb-16">
            <img src={Machin} alt="machine" className="mr-2" />
            <p className="font-normal text-[13px] lg:text-sm">Commercial</p>
          </li>
          <Link to="/contact" className="flex items-center pb-3 lg:pb-5 cursor-pointer lg:justify-end w-full">
            <p className="font-normal text-[13px] lg:text-sm">Know more</p>
            <img src={Arrow} alt="Arrow" className="ml-2" />
          </Link>
        </ul>
      </div>
      <img
        src={ConstructionImg}
        alt="construction"
        className="w-full col-start-1 lg:col-start-7 col-end-13 row-start-1"
        data-aos="fade-left"
      />
    </div>
  );
};

export default Construction;
