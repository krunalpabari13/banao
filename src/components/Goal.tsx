import React from "react";
import Avatar from "../assets/about/avatar.svg";
import Line from "../assets/about/line.svg";

const Goal = () => {
  return (
    <div className="bg-[#F1F1EF] p-5 lg:p-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 grid-flow-row-dense ">
        <h1 className="max-w-[311px] text-[28px] lg:text-[42px] lg:col-start-1 lg:col-end-6">
          What we want to achieve?
        </h1>
        <p className="lg:col-start-1 lg:col-end-6 row-start-2  text-[13px] lg:text-sm text-[rgba(84,84,84,1)] pt-5 lg:pt-8 self-end">
          As the company grows and establishes, RBT plans to set up a tech
          enabled mobile based application service to meet the growing need of
          “On demand Home-services” for small irritant repair works like minor
          electrical units installation and repairs, plumbing works, tiles
          re-laying, patch painting, arresting water seepage and carpentry
          works. We would like to launch this service with an ultra focus on
          growing needs of Bengaluru residential units initially and slowly
          spread the services across Karnataka and Tamilnadu.
        </p>
        <p className="lg:col-start-7 lg:col-end-13 lg:row-start-2 text-[13px] lg:text-[14px] font-normal text-black mt-10 lg:mt-0 self-end">
          While there are many organised builders and contractors available to
          undertake construction of new buildings and creating superior
          interiors, there are literally “NO” organised players in the market
          who gives turnkey solution in the space of repairs and renovation of
          old residential houses – flats – Apartment complexes / commercial
          buildings. Raghav BuildTech aspires to fill up this space by proving
          that they are organized, efficient, tech enabled, quality and cost
          conscious, transparent and reliable.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 grid-flow-row-dense mt-5">
        <div className="flex items-center lg:col-start-1 lg:col-end-6">
          <img
            src={Avatar}
            alt="avatar"
            className="rounded-full w-[80px] h-[80px] mr-5"
          />
          <div>
            <h1 className="font-normal text-base lg:text-[20px]">
              Captain N. Raghavan
            </h1>
            <p className="text-[13px] lg:text-base">Founder &amp; CEO</p>
          </div>
        </div>
        <p className="lg:col-start-1 lg:col-end-6 text-[13px] lg:text-sm text-[rgba(84,84,84,1)] pt-5 pt-5 lg:pt-8 self-end">
          Capt N Raghavan, a distinguished Naval Officer and an alumnus of IIT
          Kharagpur, with 35 years of comprehensive expertise of commercial
          business, including 12 years of Healthcare industry expertise, has
          taken the plunge (as a first generation entrepreneur) to build Raghav
          Buildtech in the Construction, Project Management and Maintenance
          space through this tech enabled platform.
        </p>
        <p className="lg:col-start-7 lg:col-end-13 md:row-start-2 text-[13px] lg:text-[14px] font-normal text-black mt-10 lg:mt-0 self-end">
          As a business leader with enormous experience in Projects and
          Management, Healthcare Service delivery expertise, meticulous
          maintenance of advanced medical devices, P&amp;L management,
          Operations, sales, marketing &amp; business development skills and
          innovative digital healthcare delivery insights, he has demonstrated
          himself as a reliable leader and delivered strong business growth.
        </p>
      </div>
      <img src={Line} className="mx-auto w-full mt-[60px]" />
      <div className="md:flex items-start justify-between md:mt-[60px]">
        <div className="max-w-[290px]">
          <h1 className="text-[#CD4055] font-medium md:text-[18px]">
            Our Focus
          </h1>
          <p className="text-sm text-[rgba(84,84,84,1)] pt-5">
            We wake up to accept projects which others have refused to take up.
            We would like to challenge ourselves to provide innovative cost
            effective solution.
          </p>
        </div>
        <div className="max-w-[290px] mt-10 md:mt-0">
          <h1 className="text-[#CD4055] font-medium md:text-[18px]">
            Our Vision
          </h1>
          <p className="text-sm text-[rgba(84,84,84,1)] pt-5">
            To become the house hold name for “Repairs and Renovations” and want
            to be recognised as the most cost effective - user friendly -
            transparent - efficient Repairs &amp; Renovation company
          </p>
        </div>
        <div className="max-w-[264px] mt-10 md:mt-0">
          <h1 className="text-[#CD4055] font-medium md:text-[18px]">
            Our Mission
          </h1>
          <p className="text-sm text-[rgba(84,84,84,1)] pt-5">
            To establish industry practice - SOP amongst our employees and
            deliver the projects on time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
