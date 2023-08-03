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
// Third projects images
import Img26 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.28 PM (1).jpeg";
import Img27 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.28 PM.jpeg";
import Img28 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.29 PM (1).jpeg";
import Img29 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.29 PM (2).jpeg";
import Img30 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.29 PM.jpeg";
import Img31 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.30 PM (1).jpeg";
import Img32 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.30 PM (2).jpeg";
import Img33 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.30 PM.jpeg";
import Img34 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.34 PM.jpeg";
import Img35 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.31 PM (1).jpeg";
import Img36 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.31 PM (2).jpeg";
import Img37 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.31 PM (3).jpeg";
import Img38 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.31 PM.jpeg";
import Img39 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.32 PM (1).jpeg";
import Img40 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.32 PM (2).jpeg";
import Img41 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.32 PM.jpeg";
import Img42 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.33 PM (1).jpeg";
import Img43 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.33 PM (2).jpeg";
import Img44 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.33 PM.jpeg";
import Img45 from "../assets/gallery/WhatsApp Image 2023-05-21 at 11.51.34 PM (1).jpeg";
import g1 from "../assets/gallery/graphic1.jpeg"
import g2 from "../assets/gallery/graphic2.jpeg"
import g3 from "../assets/gallery/graphic3.jpeg"
import g4 from "../assets/gallery/graphic4.jpeg"
import g5 from "../assets/gallery/graphic5.jpeg"
import g6 from "../assets/gallery/graphic6.jpeg"
import g7 from "../assets/gallery/graphic7.jpeg"
import g8 from "../assets/gallery/graphic8.jpeg"
import g9 from "../assets/gallery/graphic9.jpeg"
import g10 from "../assets/gallery/graphic10.jpeg"
import g11 from "../assets/gallery/graphic11.jpeg"
import g12 from "../assets/gallery/graphic12.jpeg"
import g13 from "../assets/gallery/graphic13.jpeg"
import g14 from "../assets/gallery/graphic14.jpeg"
import g15 from "../assets/gallery/graphic15.jpeg"
import g16 from "../assets/gallery/graphic16.jpeg"
import g17 from "../assets/gallery/graphic17.jpeg"
import g18 from "../assets/gallery/graphic18.jpeg"
import g19 from "../assets/gallery/graphic19.jpeg"
import g20 from "../assets/gallery/graphic20.jpeg"
import g21 from "../assets/gallery/graphic21.jpeg"


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
  { image: Img13 },
  { image: Img14 },
];
const imagesThree = [
  Img26,
  Img27,
  Img28,
  Img29,
  Img30,
  Img31,
  Img32,
  Img33,
  Img34,
  Img35,
  Img36,
  Img37,
  Img38,
  Img39,
  Img40,
  Img41,
  Img42,
  Img43,
  Img44,
  Img45,
];
const imagesFour=[
g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19,g20,g21
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
      <h1
        className="text-3xl md:text-4xl lg:text-[3.125rem] mb-5"
        data-aos="fade-up"
      >
        {galleryId === "1" && "Basveshvaranagar"}
        {galleryId === "2" && "Yelahanka"}
        {galleryId === "3" && "RCC Retaining compound wall."}
        {galleryId==="4" && "Graphic Version"}
      </h1>
      <div
        className="flex-col md:flex-col lg:flex-row flex justify-between text-sm mb-32"
        data-aos="fade-up"
      >
        <div className="mb-5 md:mb-8 lg:mb-0"></div>
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
                data-aos="zoom-in"
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
              data-aos="zoom-in"
            />
          ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-5 sm:ml-14 md:ml-0">
        {galleryId === "3" &&
          imagesThree.map((image: any, index): any => (
            <img
              onClick={() => handleOpen(image)}
              className="w-[33rem] h-[27rem]"
              key={index}
              src={image}
              alt=""
              data-aos="zoom-in"
            />
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-5 sm:ml-14 md:ml-0">
        {galleryId === "4" &&
          imagesFour.map((image: any, index): any => (
            <img
              onClick={() => handleOpen(image)}
              className="w-[33rem] h-[27rem]"
              key={index}
              src={image}
              alt=""
              data-aos="zoom-in"
            />
          ))}
      </div>
      <GalleryImageModal image={image} isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default GalleryDetails;
