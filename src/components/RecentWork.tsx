import React from "react";
import Rectangle1 from "../assets/home/recentWork/Rectangle1.svg";
import Rectangle4 from "../assets/home/recentWork/Rectangle4.svg";
import Rectangle2 from "../assets/home/recentWork/Rectangle2.svg";
import Rectangle3 from "../assets/home/recentWork/Rectangle3.svg";
import RedBox from "../assets/home/recentWork/RedBox.svg";

const RecentWork = () => {
  return (
    <div className="my-10 md:my-20 lg:my-32">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[2.625rem] mb-5">
          Check our recent work
        </h2>
        <p className="text-sm text-[#545454] w-[60%] md:w-[50%] lg:w-[35%] mx-auto mb-5 md:mb-10 lg:mb-[3.75rem]">
          RBT believes in OTIF (On time in Full) concept to complete the
          projects and avoids cost overrun and time over run.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-[13.75rem]">
        <img
          width="100%"
          className="col-span-2"
          src={Rectangle1}
          alt="recent work"
        />
        <img width="100%" src={Rectangle2} alt="recent work" />
        <img width="100%" src={Rectangle3} alt="recent work" />
        <img width="100%" src={RedBox} alt="recent work" />
        <img width="100%" src={Rectangle4} alt="recent work" />
      </div>
    </div>
  );
};

export default RecentWork;
