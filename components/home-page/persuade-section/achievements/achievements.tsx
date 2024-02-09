'use client';
import { opinions } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <motion.div
      className=' flexCenter gap-3 xl:gap-10 flex-col md:flex-row p-2 w-full'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
      {opinions.map((opinion, index) => (
        <div
          key={index}
          className='flexCenter flex-col rounded-md font-bold  bg-[var(--main-page-color-70)] text-[var(--text-white-1)] 
          px-1 py-2
          xl:px-3 xl:py-5 w-full
          lg:w-[350px] xl:gap-4'>
          <p className='text-lg xl:text-2xl'>{opinion.text}</p>
          <div className='flex items-end'>
            <p className=' text-base xl:text-xl tracking-wider'>
              {opinion.text_2}
            </p>
            <Image src={opinion.img} alt='ikona' />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Achievements;
