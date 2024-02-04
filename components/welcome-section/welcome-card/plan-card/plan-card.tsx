'use client';
import React from 'react';
import Image from 'next/image';
import car from '@/public/images/car.png';
import AnimateText from '@/components/ui/animate-text';
import { motion } from 'framer-motion';

const PlanCard = () => {
  return (
    <div className='flexCenter relative'>
      <motion.div
        className='hiden absolute  md:right-[156px] md:top-[-112px] md:w-[315px] md:h-[358px] lg:right-[164px] lg:top-[-132px] lg:w-[404px] lg:h-[446px]'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}>
        <Image src={car} alt='car_photo' priority fill />
      </motion.div>
      <div className='flexCenter flex-col mt-3 lg:mt-10 text-lg lg:text-2xl z-10 text-[var(--text-white-1)] font-semibold'>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Kategoria B już od
        </motion.p>

        <div className='flex items-end'>
          <AnimateText
            style=' text-2xl lg:text-3xl lg:text-4xl font-extrabold pr-1 mt-1 lg:pr-2 lg:mt-2'
            text='2590'
          />
          <AnimateText
            style='text-base lg:text-xl lg:text-xl font-extrabold pr-1 mt-1 lg:pr-2 lg:mt-2'
            text='PLN'
          />
        </div>

        <motion.div
          className=' md:block w-[120%] relative  bg-[var(--line-color)] h-[1px] mt-1 lg:mt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
    </div>
  );
};

export default PlanCard;
