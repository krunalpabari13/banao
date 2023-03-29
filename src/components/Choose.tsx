import React from "react";
import Power from "../assets/home/Power.svg";

const Choose = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[rgba(231,217,209,0.45)] order-last lg:order-first">
      <div
        className="md:pl-[120px] md:pr-[53px] pt-10 md:pt-[100px] px-10 pb-10"
        data-aos="fade-down"
      >
        <h1 className="font-normal text-[28px] md:text-[42px] text-[rgba(0,0,0,1)] pb-[40px]">
          Why choose us?
        </h1>
        <ul className="list-disc max-w-[544px]">
          <li className="list-item text-[rgba(84,84,84,1)] md:text-sm py-2 md:py-4">
            Dedicated support and constant onsite monitoring directly by the
            leadership team.
          </li>
          <li className="list-item text-[rgba(84,84,84,1)] md:text-sm py-2 md:py-4">
            Run by experienced industry leaders with credibility on faster
            turnaround.
          </li>
          <li className="list-item text-[rgba(84,84,84,1)] md:text-sm py-2 md:py-4">
            Transparent BOQ / BOM / quote / design.
          </li>
          <li className="list-item text-[rgba(84,84,84,1)] md:text-sm py-2 md:py-4">
            Turnkey solution and Highly reliable task force with good skill set.
          </li>
          <li className="list-item text-[rgba(84,84,84,1)] md:text-sm py-2 md:py-4">
            Experts in construction of new projects, repairs and renovations of
            old buildings, interior designing, exterior beautification, water
            seepage solutions.
          </li>
          <li className="list-item text-[rgba(84,84,84,1)] md:text-sm py-2 md:py-4">
            Tech enabled platform, quality and cost conscious, OTIF (On Time In
            Full) construction model.
          </li>
          <li className="list-item text-[rgba(84,84,84,1)] md:text-sm py-2 md:py-4">
            Employing the least carbon footprint techniques for environment
            conservation.
          </li>
        </ul>
      </div>
      <div className="">
        <img src={Power} alt="Power" className="w-full overflow-x-hidden" data-aos="fade-left" />
      </div>
    </div>
  );
};

export default Choose;
