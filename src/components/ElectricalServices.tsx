import React from "react";
import ElectricWork from "../assets/services/electricWork.svg";
import MainTaince from "../assets/services/icons/mainTaince.svg";
import Roller from "../assets/services/icons/roller.svg";
import Renovation from "../assets/services/icons/renovation.svg";
import Machin from "../assets/services/icons/machin.svg";
import Arrow from "../assets/services/icons/Arrow.svg";
import { Link } from "react-router-dom";

const ElectricalServices = () => {
  return (
    <div className="grid grid-cols-12 bg-[#DCE6F9]">
      <img
        src={ElectricWork}
        alt="electricWork"
        className="w-full col-start-1 col-end-13 lg:col-end-7 z-10"
        data-aos="fade-right"
      />
      <div className="col-start-1 lg:col-start-8 col-end-12 self-center px-5 lg:px-0 mt-5 lg:mt-0" data-aos="fade-down">
        <h1 className="font-normal text-[28px] lg:text-[42px]">
          Electrical Service
        </h1>
        <p className="text-[13px] lg:text-sm font-normal pt-3 lg:pt-5 text-[#545454]">
          Highly qualified and certified electricians to undertake all
          repair/renovation work of electrical equipment.
        </p>
        <ul className="mt-10">
          <li className="flex items-center pb-3 lg:pb-5">
            <img src={MainTaince} alt="mainTaince" className="mr-2" />
            <p className="font-normal text-[13px] lg:text-sm">
              Maintenance and repair
            </p>
          </li>
          <li className="flex items-center pb-3 lg:pb-5">
            <img
              src={Roller}
              alt="roller"
              className="mr-2"
            />
            <p className="font-normal text-[13px] lg:text-sm">
              Solar panel installation
            </p>
          </li>
          <li className="flex items-center pb-3 lg:pb-5">
            <img
              src={Renovation}
              alt="renovation"
              className="mr-2"
            />
            <p className="font-normal text-[13px] lg:text-sm">Residential</p>
          </li>
          <li className="flex items-center pb-5 lg:pb-16">
            <img
              src={Machin}
              alt="machine"
              className="mr-2"
            />
            <p className="font-normal text-[13px] lg:text-sm">Commercial</p>
          </li>
          <Link to="/contact" className="flex items-center pb-3 lg:pb-5 cursor-pointer lg:justify-end w-full">
            <p className="font-normal text-[13px] lg:text-sm">Know more</p>
            <img
              src={Arrow}
              alt="Arrow"
              className="ml-2"
            />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ElectricalServices;
