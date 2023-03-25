import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Img3 from "../assets/gallery/img3.jpeg";
import Img4 from "../assets/gallery/img4.jpeg";
import Img5 from "../assets/gallery/img5.jpeg";
import Img6 from "../assets/gallery/img6.jpeg";
import Img7 from "../assets/gallery/img7.jpeg";
import Img8 from "../assets/gallery/img8.jpeg";
import Img9 from "../assets/gallery/img9.jpeg";
import Img10 from "../assets/gallery/img10.jpeg";
import Img11 from "../assets/gallery/img11.jpeg";
import Img12 from "../assets/gallery/img12.jpeg";
import Img13 from "../assets/gallery/img13.jpeg";
import Img14 from "../assets/gallery/img14.jpeg";
import Img15 from "../assets/gallery/img15.jpeg";
import Img16 from "../assets/gallery/img16.jpeg";
import Img17 from "../assets/gallery/img17.jpeg";
import Img18 from "../assets/gallery/img18.jpeg";
import Img19 from "../assets/gallery/img19.jpeg";
import Img20 from "../assets/gallery/img20.jpeg";
import Img21 from "../assets/gallery/img21.jpeg";
import Img22 from "../assets/gallery/img22.jpeg";
import Img23 from "../assets/gallery/img23.jpeg";
import Img24 from "../assets/gallery/img24.jpeg";
import Img25 from "../assets/gallery/img25.jpeg";
import GalleryImageModal from "./GalleryImageModal";

const imagesOne = [
  { image: Img3 },
  { image: Img4 },
  { image: Img5 },
  { image: Img6 },
  { image: Img7 },
  { image: Img8 },
  { image: Img9 },
  { image: Img10 },
  { image: Img11 },
  { image: Img12 },
  { image: Img13 },
  { image: Img14 },
];

const imagesTwo = [
  { image: Img15 },
  { image: Img16 },
  { image: Img17 },
  { image: Img18 },
  { image: Img19 },
  { image: Img20 },
  { image: Img21 },
  { image: Img22 },
  { image: Img23 },
  { image: Img24 },
  { image: Img25 },
];

const GalleryDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const { galleryId }: any = useParams();

  const handleOpen = (image: any) => {
    setImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="px-5 md:px-10 lg:px-[7.5rem] pb-5 md:pb-10 lg:pb-[7.5rem] pt-5 md:pt-10 lg:pt-[4.75rem]">
      <h1 className="text-3xl md:text-4xl lg:text-[3.125rem] mb-5">Name of Project</h1>
      <div className="flex-col md:flex-col lg:flex-row flex justify-between text-sm mb-32">
        <div className="mb-5 md:mb-8 lg:mb-0">
          <p className="text-[#545454] mb-3">WIP • May 2022 - Jul 2022</p>
          <p>
            Address - Y - 222, VGN Kimberly Towers, 2nd Avenue, Anna Nagar,
            Chennai - 600040.
          </p>
        </div>
        <p className="w-[100%] lg:w-[50%] text-[#545454]">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-5 sm:ml-14 md:ml-0">
        {galleryId === "1" &&
          imagesOne.map((image: any, index): any => (
            <>
              <img
                onClick={() => handleOpen(image.image)}
                className="w-[33rem] h-[27rem]"
                key={index}
                src={image.image}
                alt=""
              />
            </>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-5 sm:ml-14 md:ml-0">
        {galleryId === "2" &&
          imagesTwo.map((image: any, index): any => (
            <img
              onClick={() => handleOpen(image.image)}
              className="w-[33rem] h-[27rem]"
              key={index}
              src={image.image}
              alt=""
            />
          ))}
      </div>

      <GalleryImageModal image={image} isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default GalleryDetails;

{
  /* <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */
}
