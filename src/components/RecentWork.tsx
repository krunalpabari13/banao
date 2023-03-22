import React from "react";
import Rectangle1 from "../assets/home/recentWork/Rectangle1.svg";
import Rectangle4 from "../assets/home/recentWork/Rectangle4.svg";
import Rectangle5 from "../assets/home/recentWork/Rectangle5.svg";
import Rectangle6 from "../assets/home/recentWork/Rectangle6.svg";
import RedBox from "../assets/home/recentWork/RedBox.svg";

const RecentWork = () => {
  return (
    <div className="my-32">
      <div className="text-center">
        <h2 className="text-[2.625rem] text-[#4044E9] mb-5">
          Check our recent work
        </h2>
        <p className="text-sm text-[#545454] w-[22%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et magna.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-[13.75rem]">
        <img width="100%" className="col-span-2" src={Rectangle1} alt="recent work" />
        <img className="h-[50rem]" src={Rectangle5} alt="recent work" />
        <img width="100%" src={Rectangle6} alt="recent work" />
        <img width="100%" src={RedBox} alt="recent work" />
        <img width="100%" src={Rectangle4} alt="recent work" />
      </div>
    </div>
  );
};

export default RecentWork;