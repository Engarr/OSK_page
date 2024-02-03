import React from 'react';
import Image from 'next/image';
import car from '@/public/images/car.png';

const PlanCard = () => {
  return (
    <div className='flexCenter relative'>
      <div className='hiden absolute  md:right-[156px] md:top-[-122px] md:w-[315px] md:h-[358px] lg:right-[164px] lg:top-[-132px] lg:w-[404px] lg:h-[446px]'>
        <Image src={car} alt='car_photo' priority fill />
      </div>
      <div className='flexCenter flex-col mt-3 lg:mt-10 text-md lg:text-2xl z-10 text-[var(--text-white-1)] font-semibold'>
        <p>Kategoria B już od</p>
        <p className='mt-2'>
          <span className='text-2xl lg:text-3xl font-extrabold pr-2'>
            2 590
          </span>{' '}
          PLN
        </p>
        <div className='hidden md:block w-[120%] relative  bg-[var(--line-color)] h-[1px] mt-2 lg:mt-4' />
      </div>
    </div>
  );
};

export default PlanCard;
