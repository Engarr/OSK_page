'use client';
import React from 'react';
import { moreInfo } from '@/lib/data';
import InfoBox from './info-box/info-box';
import { motion } from 'framer-motion';
import Title from './title/title';

const WelcomeCard = () => {
  return (
    <div className=' relative h-full flex items-center flex-col justify-around w-full lg:w-auto p-2 z-[20] '>
      <Title />

      <motion.div
        className='bg-[var(--black-80)] flex flex-col md:flex-row xl:gap-10 px-3 py-2 rounded-md '
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}>
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
