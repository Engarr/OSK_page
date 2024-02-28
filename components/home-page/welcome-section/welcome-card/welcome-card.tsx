'use client';
import React from 'react';
import { moreInfo } from '@/lib/data';
import InfoBox from './info-box/info-box';
import { motion } from 'framer-motion';
import Title from './title/title';

const WelcomeCard = () => {
  return (
    <div className=' relative  flex items-center flex-col justify-around w-full lg:w-auto p-1 lg:p-0 z-[20] gap-2 s:gap-14 lg:gap-0 '>
      <Title />

      <motion.div
        className='bg-[var(--black-80)] flex flex-col md:flex-row xl:gap-10 px-2 py-2 rounded-md mt-3 xs:mt-10 md:mt-[100px]'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'tween', delay: 0.5 }}>
        {moreInfo.map((i, index) => (
          <React.Fragment key={index}>
            <InfoBox img={i.img} text={i.text} />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default WelcomeCard;
