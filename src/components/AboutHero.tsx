import React from "react";
import AboutHeroImg from "../assets/about/image 31AboutUs_Banner.svg";
import AboutHeroSmImg from "../assets/about/image 31AboutUs_Banner.svg";

const AboutHero = () => {
  return (
    <>
      <div
        className="mx-5 lg:mx-0 lg:pl-[120px] grid  grid-cols-1 lg:grid-cols-12 grid-flow-row-dense mt-[37px] mb-[40px] lg:mt-[76px] lg:mb-[65px]"
        data-aos="fade-up"
      >
        <h1 className="lg:col-start-1 lg:col-end-6 text-[34px] lg:text-[50px]  lg:leading-[75px]">
          One stop shop for your construction project
        </h1>
        <p className="text-[13px] lg:text-sm text-[rgba(84,84,84,1)] pt-5 lg:col-start-7 lg:col-end-12 self-end mt-[10px] lg:mt-0">
          Raghav BuildTech aspires to grow and emerge as a one stop shop for
          “Construction – Maintenance - Repairs and Renovation projects”
          offering faster turnaround, ensuring cost optimization, assuring
          quality and timely completion.
        </p>
      </div>
      <img
        src={AboutHeroSmImg}
        className="w-full  lg:hidden"
        data-aos="fade-up"
      />
      <img
        src={AboutHeroImg}
        className="w-full h-[495px] hidden lg:block object-cover"
        data-aos="fade-up"
      />
    </>
  );
};

export default AboutHero;
