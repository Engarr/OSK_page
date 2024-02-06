import React from 'react';
import HowToStart from './how-to-start/how-to-start';
import BackgroundImage from './background-image/background-image';
import Needs from './needs/needs';
import car_2 from '@/public/images/car_2.png';
import logo_2 from '@/public/images/logo_2.png';
import small_logo_2 from '@/public/images/small_logo_2.png';
import Image from 'next/image';
import WhatNext from './what-next/what-next';

const Requirements = () => {
  return (
    <section className='relative items-center flex flex-col overflow-hidden py-10'>
      <BackgroundImage />

      <div
        className='absolute hidden
      md:w-[350px]
      lg:left-[2%] lg:top-[35%] lg:w-[450px] lg:inline-block
      xl:left-[10%] xl:top-[40%] xl:w-[550px] 
      2xl:w-[700px] 2xl:top-[35%] 2xl:left-[12%]
      xxxl:w-[750px] z-[10]'>
        <Image src={car_2} alt='samochód' loading='lazy' />
      </div>

      <Image
        src={logo_2}
        alt='samochód'
        className='absolute h-[345px] w-[255px] lg:h-[1045px] lg:w-[765px] top-[35%] left-[-10%] opacity-50 lg:opacity-100'
        loading='lazy'
      />
      <Image
        src={small_logo_2}
        alt='samochód'
        className='absolute h-[150px] w-[276px] lg:h-[250px] lg:w-[376px] top-[0%] right-[0%] opacity-50 lg:opacity-100'
        loading='lazy'
      />
      <div className='flex flex-col lg:flex-row lg:mt-[50px] items-center lg:items-start'>
        <HowToStart />
        <div>
          <Needs />
          <WhatNext />
        </div>
      </div>
    </section>
  );
};

export default Requirements;
