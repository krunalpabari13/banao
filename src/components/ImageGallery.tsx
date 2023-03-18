import React from 'react'
import GalleryImag1 from "../assets/gallery/Img1.svg";
import GalleryImag2 from "../assets/gallery/Img2.svg";

const ImageGallery = () => {
  return (
    <div className='p-5 md:p-14 lg:p-[7.5rem]'>
      <h1 className='font-normal text-3xl md:text-4xl lg:text-[3.125rem]'>Explore our work</h1>
      <p className='lg:w-1/2 mt-5 mb-10 lg:ml-auto lg:mr-0 lg:mb-32'>Our approach is unique: it aims to build a long-term relationship. Maintaining your home is essential to preserve its value and we work with you to assist you with your projects in order to make your dreams YOUR reality.</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='relative'>
          <img width="100%" height="100%" src={GalleryImag1} alt="galler image" />
          <div className='absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-[#000259] opacity-60'>
            <div className='flex items-center justify-between mb-4'>
              <p className='text-[#D8D8D8] text-sm'>Completed &nbsp; • &nbsp; May 2022 - Jul 2022</p>
              <p className='text-white text-sm'>25 Photos</p>
            </div>
            <h3 className='text-white font-medium text-lg mb-1'>Name of the Project</h3>
            <p className='text-[#D8D8D8] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>
        </div>
        <div className='relative'>
          <img width="100%" height="100%" src={GalleryImag2} alt="galler image" />
          <div className='absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-[#000259] opacity-60'>
            <div className='flex items-center justify-between mb-4'>
              <p className='text-[#D8D8D8] text-sm'>Completed &nbsp; • &nbsp; May 2022 - Jul 2022</p>
              <p className='text-white text-sm'>25 Photos</p>
            </div>
            <h3 className='text-white font-medium text-lg mb-1'>Name of the Project</h3>
            <p className='text-[#D8D8D8] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>
        </div>
        <div className='relative'>
          <img width="100%" height="100%" src={GalleryImag2} alt="galler image" />
          <div className='absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-[#000259] opacity-60'>
            <div className='flex items-center justify-between mb-4'>
              <p className='text-[#D8D8D8] text-sm'>Completed &nbsp; • &nbsp; May 2022 - Jul 2022</p>
              <p className='text-white text-sm'>25 Photos</p>
            </div>
            <h3 className='text-white font-medium text-lg mb-1'>Name of the Project</h3>
            <p className='text-[#D8D8D8] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>
        </div>
        <div className='relative'>
          <img width="100%" height="100%" src={GalleryImag1} alt="galler image" />
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