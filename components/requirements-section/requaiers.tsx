import React from 'react';
import HowToStart from './how-to-start/how-to-start';
import BackgroundImage from './background-image/background-image';
import Needs from './needs/needs';
import car_2 from '@/public/images/car_2.png';
import logo_2 from '@/public/images/logo_2.png';
import small_logo_2 from '@/public/images/small_logo_2.png';
import Image from 'next/image';
import WhatNext from './what-next/what-next';
import Wrapper from '../ui/wrapper';

const Requirements = () => {
  return (
    <section className='relative items-center flex flex-col overflow-hidden py-10 '>
      <BackgroundImage />

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
      <Wrapper style='lg:mt-[50px] flex-col lg:flex-row items-center lg:items-start '>
        <div className='relative flex items-center flex-col-reverse'>
          <Image
            src={car_2}
            alt='samochód'
            loading='lazy'
            className='hidden lg:inline-block'
          />
          <HowToStart />
        </div>

        <div className=' w-full md:max-w-[34rem] xl:max-w-[38rem] '>
          <Needs />
          <WhatNext />
        </div>
      </Wrapper>
    </section>
  );
};

export default Requirements;
