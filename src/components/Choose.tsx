import React from "react";
import Rectangle from "../assets/home/reason.svg";

const Choose = () => {
  return (
    <div
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${Rectangle})` }}
      className="h-[49.125rem] bg-no-repeat bg-cover pl-[7.5rem] pt-[11.938rem] text-white"
    >
      <h1 className="text-[2.625rem] w-[35%] mb-[3.75rem]">We are high performance team with hands-on mentality</h1>
      <h3 className="text-lg font-semibold mb-5">Why choose Raghav Buildtech?</h3>
      <p className="text-sm w-[35%]">
        un by experienced industry leaders with credibility on faster
        turnaround, transparent design and highly reliable. Turnkey solution for
        construction of new projects, repairs to renovations of old buildings,
        interior designing, exterior beautification, water seepage expertise all
        under one roof. Tech enabled, quality and cost conscious, OTIF (On Time
        In Full) construction model, employing the least carbon footprint
        techniques for environment conservation
      </p>
    </div>
  );
};

export default Choose;
