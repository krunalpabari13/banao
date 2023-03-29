import React from 'react';
import Group from "../assets/home/Group.svg";
import ArrowOutward from "../assets/home/arrow-outward.svg";
import Electrical from "../assets/home/Electrical.svg";
import Plumbing from "../assets/home/Plumbing.svg";
import TileSetters from "../assets/home/TileSetters.svg";
import Carpentry from "../assets/home/Carpentry.svg";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
      <div className='pl-5 md:pl-14 lg:pl-[7.5rem] pt-5 md:pt-10 lg:pt-[6.5rem] pr-24 order-last lg:order-first mb-10 lg:mb-0' data-aos="fade-down">
        <h2 className='text-3xl md:text-4xl lg:text-[2.625rem] mb-[2.563rem] text-center md:text-start'>Our Services</h2>
        <Link to="/services" className='flex items-center justify-end mb-5'>
          <p className='text-sm'>View more</p>
          <img src={ArrowOutward} alt="arrow outward" />
        </Link>
        <div>
          <div className='flex items-center justify-between mb-14'>
            <img src={Electrical} alt="Electrical" />
            <div className='ml-6'>
              <h3 className='font-medium mb-2.5'>Electrical</h3>
              <p className='text-[#545454] text-sm'>Highly qualified and certified electricians to undertake all repair/renovation work of electrical works</p>
            </div>
          </div>
          <div className='flex items-center justify-between mb-14'>
            <img src={Plumbing} alt="Plumbing" />
            <div className='ml-6'>
              <h3 className='font-medium mb-2.5'>Plumbing</h3>
              <p className='text-[#545454] text-sm'>Experienced plumbers who understands the importance of water seepage and having expertise in perfect water line and sewage fittings</p>
            </div>
          </div>
          <div className='flex items-center justify-between mb-14'>
            <img src={TileSetters} alt="TileSetters" />
            <div className='ml-6'>
              <h3 className='font-medium mb-2.5'>Tile Setters</h3>
              <p className='text-[#545454] text-sm'>We have professional team who carries out perfect fixing of tiles and ensure effective adhesion between them. We ensure 100% grove cutting and epoxy filling works to avoid any water seepage</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <img src={Carpentry} alt="Carpentry" />
            <div className='ml-6'>
              <h3 className='font-medium mb-2.5'>Tile Setters</h3>
              <p className='text-[#545454] text-sm'>We have master craftmen who knows how to choose right wood for the right work. Our team delivers perfect finish of any carpentry work without wasting materials.</p>
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