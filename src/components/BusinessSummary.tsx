import React from 'react';
import Map from "../assets/home/map.svg";

const BusinessSummary = () => {
  return (
    <div className='bg-[#DCE6F9] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
      <img width="100%" src={Map} alt="business summary" />
      <div className='my-10 md:my-20 lg:my-[7.5rem] ml-32'>
        <p className='text-sm text-[#545454] mb-5 md:mb-10 lg:mb-[3.75rem]'>We are experienced professionals committed to <br /> deliver project of exceptional while staying on <br /> schedule and under budget.</p>
        <div className='grid grid-cols-2 gap-10 md:gap-20 lg:gap-24 mr-32'>
          <div>
            <h1 className='text-[2.625rem] text-[#4044E9] border-b border-black'>100k+</h1>
            <p className='mt-2'>Projects completed</p>
          </div>
          <div>
          <h1 className='text-[2.625rem] text-[#4044E9] border-b border-black'>1k+</h1>
            <p className='mt-2'>Client served</p>
          </div>
          <div>
          <h1 className='text-[2.625rem] text-[#4044E9] border-b border-black'>95%</h1>
            <p className='mt-2'>Satisfied clients</p>
          </div>
          <div>
          <h1 className='text-[2.625rem] text-[#4044E9] border-b border-black'>75%</h1>
            <p className='mt-2'>Repeated clients</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessSummary;