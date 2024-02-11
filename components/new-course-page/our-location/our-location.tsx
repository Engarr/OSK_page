'use client';
import NavigateBtn from '@/components/ui/navigate-btn';
import React from 'react';
import { motion } from 'framer-motion';

const OurLocation = () => {
  return (
    <motion.div
      className='flexCenter flex-col my-5 lg:my-10 text-center lg:text-start'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <h4 className='text-lg lg:text-xl mb-2'>
        Dokładna lokalizacja kursu stacjonarnego w Rzeszowie:
      </h4>
      <p>ul. Stefana Żeromskiego 6/4</p>
      <p>35-001 Rzeszów</p>
      <NavigateBtn
        text='Zapisz się już dziś!'
        link='/#signup'
        style='text-base md:text-xl w-[18rem] h-[3.8rem]  md:w-[19rem] md:h-[4.6rem] z-[30] mt-4 '
      />
    </motion.div>
  );
};

export default OurLocation;
