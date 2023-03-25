import React from 'react'
import { useNavigate } from 'react-router-dom';
import GalleryImag1 from "../assets/gallery/Img1.svg";
import GalleryImag6 from "../assets/gallery/img6.jpeg";

const ImageGallery = () => {
  const navigate = useNavigate();

  const navigateImageDetails = (id: any) => {
    navigate(`/gallery/${id}`)
  }

  return (
    <div className='px-5 md:px-10 lg:px-[7.5rem] pb-5 md:pb-10 lg:pb-[7.5rem] pt-5 md:pt-10 lg:pt-[4.75rem]'>
      <h1 className='font-normal text-3xl md:text-4xl lg:text-[3.125rem] mb-10 md:mb-16 lg:mb-32'>Explore our work</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div onClick={() => navigateImageDetails(1)} className='relative'>
          <img width="100%" src={GalleryImag1} alt="gallery image" />
          <div className='absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-[#000259] opacity-60'>
            <div className='flex items-center justify-between mb-4'>
              <p className='text-[#D8D8D8] text-sm'>Completed &nbsp; • &nbsp; May 2022 - Jul 2022</p>
              <p className='text-white text-sm'>25 Photos</p>
            </div>
            <h3 className='text-white font-medium text-lg mb-1'>Name of the Project</h3>
            <p className='text-[#D8D8D8] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>
        </div>
        <div onClick={() => navigateImageDetails(2)} className='relative'>
          <img className='w-full h-[44.6rem] lg:h-[20.5rem] xl:h-[27.5rem] 2xl:h-[44.6rem]' src={GalleryImag6} alt="gallery image" />
          <div className='absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-[#000259] opacity-60'>
            <div className='flex items-center justify-between mb-4'>
              <p className='text-[#D8D8D8] text-sm'>Completed &nbsp; • &nbsp; May 2022 - Jul 2022</p>
              <p className='text-white text-sm'>25 Photos</p>
            </div>
            <h3 className='text-white font-medium text-lg mb-1'>Name of the Project</h3>
            <p className='text-[#D8D8D8] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery