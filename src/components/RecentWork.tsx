import React from "react";
import Rectangle1 from "../assets/home/recentWork/Rectangle1.svg";
import Rectangle4 from "../assets/home/recentWork/Rectangle4.svg";
import Rectangle2 from "../assets/home/recentWork/Rectangle2.svg";
import Rectangle3 from "../assets/home/recentWork/Rectangle3.svg";
import RedBox from "../assets/home/recentWork/RedBox.svg";
import RecentWorkImage from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.34 PM (1).jpeg"

const RecentWork = () => {
  return (
    <div className="my-10 md:my-20 lg:my-32">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl lg:text-[2.625rem] mb-5">
          Check our recent work
        </h2>
        <p className="text-sm text-[#545454] w-[60%] md:w-[50%] lg:w-[35%] mx-auto mb-5 md:mb-10 lg:mb-[3.75rem]">
          RBT believes in OTIF (On time in Full) concept to complete the
          projects and avoids cost overrun and time over run.
        </p>
      </div>
      <div className="hidden lg:block">
        <div className="px-5 max-w-5xl mx-auto grid grid-cols-12 grid-rows-3 md:grid-rows-2 gap-[10px]  ">
          <div className="row-start-1 row-end-2 col-start-1 col-end-8">
            <img src={Rectangle1} alt="IMG1" data-aos="fade-right" />
          </div>
          <div className="row-start-1 row-end-2 col-start-8 col-end-13   ">
            <img src={Rectangle2} alt="IMG2" data-aos="fade-left" />
          </div>
          <div className="md:row-start-2 md:row-end-3 col-start-1 col-end-5 ">
            <img src={Rectangle3} alt="IMG3" data-aos="fade-right" />
          </div>
          {/* <div className=" bg-[#D1495C] md:row-start-2 md:row-end-3 md:col-start-5 md:col-end-9" data-aos="fade-up"></div> */}
          <div className="md:row-start-2 md:row-end-3 md:col-start-5 md:col-end-9" data-aos="fade-up">
          <img src={RecentWorkImage} style={{width:"100%" , height:"341px", objectFit:"cover"}} alt="IMG4" data-aos="fade-up" />
          </div>
          <div className="h-full md:row-start-2 md:row-end-3 md:col-start-9  md:col-end-13 ">
            <img src={Rectangle4} alt="IMG5" data-aos="fade-left" />
          </div>
        </div>
      </div>

      <div
        className="lg:hidden grid grid-cols-12 grid-flow-row-dense px-5 gap-[10px] pb-[80px] aos-init aos-animate"
        data-aos="fade-down"
      >
        <img
          src={Rectangle2}
          alt="IMG1"
          className="w-full col-start-1 col-end-7"
          data-aos="fade-right"
        />
        <img
          src={Rectangle2}
          alt="IMG1"
          className="w-full col-start-7 col-end-13"
          data-aos="fade-left"
        />
        <p className=" bg-[#CD4055] w-full h-[40px] col-start-1 col-end-13"></p>
        <img
          src={Rectangle3}
          alt="IMG1"
          className="w-full col-start-1 col-end-7"
          data-aos="fade-right"
        />
        <img
          src={Rectangle4}
          alt="IMG1"
          className="w-full col-start-7 col-end-13"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default RecentWork;
