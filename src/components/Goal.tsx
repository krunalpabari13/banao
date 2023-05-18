import React from "react";
import Avatar from "../assets/about/avatar.svg";
import Line from "../assets/about/line.svg";

const Goal = () => {
  return (
    <div className="">
      <div
        className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-14 lg:pt-24 p-5 lg:px-[120px]"
        data-aos="fade-down"
      >
        <h1 className="text-5xl md:text-7xl leading-[4rem] md:leading-[6rem] mb-10 md:mb-0 lg:w-[90%] xl:w-[80%] 2xl:w-[70%]">
          What we want to achieve?
        </h1>
        <div>
          <p className="">
            While there are many organised builders and contractors available to
            undertake construction of new buildings and creating superior
            interiors, there are literally “NO” organised players in the market
            who gives turnkey solution in the space of repairs and renovation of
            old residential houses – flats – Apartment complexes / commercial
            buildings. Raghav BuildTech aspires to fill up this space by proving
            that they are organized, efficient, tech enabled, quality and cost
            conscious, transparent and reliable.
          </p>
          <p className="mt-10">
            As the company grows and establishes, RBT plans to set up a tech
            enabled mobile based application service to meet the growing need of
            “On demand Home-services” for small irritant repair works like minor
            electrical units installation and repairs, plumbing works, tiles
            re-laying, patch painting, arresting water seepage and carpentry
            works. We would like to launch this service with an ultra focus on
            growing needs of Bengaluru residential units initially and slowly
            spread the services across Karnataka and Tamilnadu.
          </p>
        </div>
      </div>
      <img src={Line} className="mx-auto w-full mt-10 p-5 lg:px-[120px]" />
      <div className="md:flex items-start justify-between md:mt-5 p-5 lg:px-[120px]">
        <div className="max-w-[290px]" data-aos="fade-right">
          <h1 className="text-[#CD4055] font-medium md:text-[18px]">
            Our Focus
          </h1>
          <p className="text-sm text-[rgba(84,84,84,1)] pt-5">
            We wake up to accept projects which others have refused to take up.
            We would like to challenge ourselves to provide innovative cost
            effective solution.
          </p>
        </div>
        <div className="max-w-[290px] mt-10 md:mt-0" data-aos="fade-up">
          <h1 className="text-[#CD4055] font-medium md:text-[18px]">
            Our Vision
          </h1>
          <p className="text-sm text-[rgba(84,84,84,1)] pt-5">
            To become the house hold name for “Construction-Engineering-Repairs
            and Renovations”.
          </p>
        </div>
        <div className="max-w-[264px] mt-10 md:mt-0" data-aos="fade-left">
          <h1 className="text-[#CD4055] font-medium md:text-[18px]">
            Our Mission
          </h1>
          <p className="text-sm text-[rgba(84,84,84,1)] pt-5">
            To be recognised as the most cost effective - user friendly -
            transparent - efficient builders & innovators.
          </p>
        </div>
      </div>
      <div
        className="bg-[#F1F1EF] grid grid-cols-1 md:grid-cols-2 mt-10 py-16 p-5 lg:px-[120px]"
        data-aos="fade-down"
      >
        <div className="flex mb-10 md:mb-0">
          <img
            src={Avatar}
            alt="avatar"
            className="rounded-full w-[100px] h-[100px] mr-5"
          />
          <div className="mt-2">
            <h1 className="font-bold text-2xl mb-1 md:mb-1.5">
              Captain N. Raghavan
            </h1>
            <p className="text-[13px] lg:text-lg text-[#545454]">
              Founder &amp; CEO
            </p>
          </div>
        </div>
        <div>
          <p className="">
            Capt N Raghavan, a distinguished Naval Officer and an alumnus of IIT
            Kharagpur has taken the plunge (as a first generation
            entrepreneur)to build Raghav BuildTech in the Construction, Project
            Management and Maintenance space through this tech enabled platform.
            He has 35 years of rich experience in Engineering, Projects and
            Management, Healthcare Service delivery.
          </p>
          <p className="mt-10 lg:mt-10">
            As a business leader, he has demonstrated his expertise in
            innovative digital healthcare delivery insights, strong operational
            expertise and meticulous planning and maintenance of advanced
            medical devices. Highly accomplished and reliable leader.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
