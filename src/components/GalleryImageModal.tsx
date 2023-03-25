import React, { useState } from "react";

const GalleryImageModal = ({ image, isOpen, onClose }: any) => {

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-500 bg-opacity-75 absolute inset-0"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
          <div className="p-4">
            <img className="w-[40rem] h-[40rem]" src={image} alt="" />
          </div>

          <div className="px-4 py-2 bg-gray-100 flex justify-end">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition-colors"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImageModal;
