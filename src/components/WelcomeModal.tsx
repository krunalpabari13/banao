import React from "react";
import WelcomeModalImg from "../assets/home/WelcomeModal.svg";

const WelcomeModal = ({
  showWelcomeModal,
  handleWelcomeModal,
  ModalImageLoaded,
}: any) => {
  return (
    <div
      className={`${
        showWelcomeModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-800 bg-opacity-60 absolute inset-0"></div>
        <div className="bg-white overflow-hidden shadow-xl transform transition-all relative">
          <button
            onClick={handleWelcomeModal}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg absolute top-4 right-0 mb-4 mr-4 flex items-end dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="">
            <img
              className=""
              onLoad={ModalImageLoaded}
              src={WelcomeModalImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
