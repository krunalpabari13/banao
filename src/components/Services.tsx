import React from 'react';
import Group from "../assets/home/Group.svg";
import ArrowOutward from "../assets/home/arrow-outward.svg";
import Electrical from "../assets/home/Electrical.svg";
import Plumbing from "../assets/home/Plumbing.svg";
import TileSetters from "../assets/home/TileSetters.svg";

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
      <div className='pl-5 md:pl-14 lg:pl-[7.5rem] pt-5 md:pt-10 lg:pt-[6.5rem] pr-24 order-last lg:order-first mb-10 lg:mb-0'>
        <h2 className='text-3xl md:text-4xl lg:text-[2.625rem] mb-5 text-center md:text-start'>Our Services</h2>
        <p className='text-[#545454] text-sm mb-[3.75rem] text-center md:text-start'>We provide transparent and tech enabled solutions to fill up space efficiently.</p>
        <div className='flex items-center justify-end mb-5'>
          <p className='text-sm'>View more</p>
          <img src={ArrowOutward} alt="arrow outward" />
        </div>
        <div>
          <div className='flex items-center justify-between mb-10'>
            <img src={Electrical} alt="Electrical" />
            <div className='ml-6'>
              <h3 className='font-medium'>Electrical</h3>
              <p className='text-[#545454] text-sm'>Highly qualified and certified electricians to undertake all repair/renovation work of electrical works</p>
            </div>
          </div>
          <div className='flex items-center justify-between mb-10'>
            <img src={Plumbing} alt="Plumbing" />
            <div className='ml-6'>
              <h3 className='font-medium'>Plumbing</h3>
              <p className='text-[#545454] text-sm'>Experienced plumbers who understands the importance of water seepage and having expertise in perfect water line and sewage fittings</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <img src={TileSetters} alt="TileSetters" />
            <div className='ml-6'>
              <h3 className='font-medium'>Tile Setters</h3>
              <p className='text-[#545454] text-sm'>We have professional team who carries out perfect fixing of tiles and ensure effective adhesion between item walk 100% grove epoxy filling works.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img width="100%" src={Group} alt="services" />
      </div>
    </div>
  )
}

export default Services;