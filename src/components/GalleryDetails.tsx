import React from "react";
import { useParams } from "react-router-dom";

const GalleryDetails = () => {
  const { galleryId } = useParams();

  return (
    <div className="px-[7.5rem] pb-[7.5rem] pt-[4.75rem]">
      <h1 className="text-[3.125rem] mb-5">Name of Project</h1>
      <div className="flex justify-between text-sm">
        <div>
          <p className="text-[#545454] mb-3">WIP • May 2022 - Jul 2022</p>
          <p>
            Address - Y - 222, VGN Kimberly Towers, 2nd Avenue, Anna Nagar,
            Chennai - 600040.
          </p>
        </div>
        <p className="w-[50%] text-[#545454]">
          Our approach is unique: it aims to build a long-term relationship.
          Maintaining your home is essential to preserve its value and we work
          with you to assist you with your projects in order to make your dreams
          YOUR reality. We have a great structure in place but always look to
          see where we can improve to offer an honest and great experience to
          all our stakeholders. We have no bad references nor legal issues. We
          are financially stables and capable of offering a great after-delivery
          service.
        </p>
      </div>
    </div>
  );
};

export default GalleryDetails;
