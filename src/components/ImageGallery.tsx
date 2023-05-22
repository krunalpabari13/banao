import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GalleryImag1 from "../assets/gallery/Img1.svg";
import GalleryImag2 from "../assets/gallery/Img2.svg";
import GalleryImag6 from "../assets/gallery/img6.jpeg";
import CoverImage from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.32 PM (1).jpeg"
import axios from "axios";

const ImageGallery = () => {
  const [media, setMedia] = useState(null);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const navigate = useNavigate();

  const navigateImageDetails = (id: any) => {
    navigate(`/gallery/${id}`);
  };

  const showDetails = () => {
    setShow(true);
  };
  const hideDetails = () => {
    setShow(false);
  };

  const show2Details = () => {
    setShow2(true);
  };
  const hide2Details = () => {
    setShow2(false);
  };
  const show3Details = () => {
    setShow3(true);
  };
  const hide3Details = () => {
    setShow3(false);
  };

  useEffect(() => {
    axios
      .get(`https://backend.raghavbuildtech.com/media/${2}`)
      .then((response) => {
        // Handle the response data
        setMedia(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }, []);

  console.log(media);

  return (
    <div className="px-5 md:px-10 lg:px-[7.5rem] pb-5 md:pb-10 lg:pb-[7.5rem] pt-5 md:pt-10 lg:pt-[4.75rem]">
      <h1 className="font-normal text-3xl md:text-4xl lg:text-[3.125rem] mb-10 md:mb-16 lg:mb-32" data-aos="fade-up">
        Explore our work
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          onClick={() => navigateImageDetails(1)}
          onMouseOver={showDetails}
          onMouseOut={hideDetails}
          className="relative"
        >
          <img width="100%" src={GalleryImag1} alt="gallery image" data-aos="fade-right" />
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-[#000259] duration-500 ${
              show ? "opacity-60" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-[#D8D8D8] text-sm">
                Completed &nbsp; • &nbsp; May 2022 - Jul 2022
              </p>
              <p className="text-white text-sm">25 Photos</p>
            </div>
            <h3 className="text-white font-medium text-lg mb-1">
            House construction at Basveshvaranagar, Bangalore
            </h3>
            <p className="text-[#D8D8D8] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
        <div
          onClick={() => navigateImageDetails(2)}
          onMouseOver={show2Details}
          onMouseOut={hide2Details}
          className="relative"
        >
          <img
            width="100%"
            src={GalleryImag2}
            alt="gallery image"
            data-aos="fade-left"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-[#000259] duration-500 ${
              show2 ? "opacity-60" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-[#D8D8D8] text-sm">
                Completed &nbsp; • &nbsp; May 2022 - Jul 2022
              </p>
              <p className="text-white text-sm">25 Photos</p>
            </div>
            <h3 className="text-white font-medium text-lg mb-1">
              Name of the Project
            </h3>
            <p className="text-[#D8D8D8] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
        <div
          onClick={() => navigateImageDetails(3)}
          onMouseOver={show3Details}
          onMouseOut={hide3Details}
          className="relative"
        >
          <img
            width="100%"
            src={CoverImage}
            alt="gallery image"
            data-aos="fade-left"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-[#000259] duration-500 ${
              show3 ? "opacity-60" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-[#D8D8D8] text-sm">
                Completed &nbsp; • &nbsp; May 2022 - Jul 2022
              </p>
              <p className="text-white text-sm">25 Photos</p>
            </div>
            <h3 className="text-white font-medium text-lg mb-1">
            RCC Retaining compound wall.
            </h3>
            <p className="text-[#D8D8D8] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
