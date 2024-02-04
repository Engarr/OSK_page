'use client';
import React from 'react';
import Btn from '../../ui/btn';
import { moreInfo } from '@/lib/data';
import InfoBox from './info-box/info-box';
import PlanCard from './plan-card/plan-card';
import { motion } from 'framer-motion';
import Title from './title/title';

const WelcomeCard = () => {
  return (
    <div className='flexCenter absolute top-[42%] md:top-[45%] left-1/2 -translate-x-1/2  flex-col w-full lg:w-auto p-2 z-[20]'>
      <Title />
      <Btn
        text='Zapisz się już dziś!'
        style='text-base md:text-xl w-[18rem] h-[3.8rem]  md:w-[19rem] md:h-[4.6rem] z-[30] '
      />
      <PlanCard />

      <motion.div
        className='relative flex flex-col justify-center bg-[var(--black-80)] rounded-md 
        p-1 xs:p-2
        top-[0.25rem] mt-[0.25rem]
        xs:mt-[15%]
        s:mt-[20%]
        md:flex-row md:top-[3.25rem]       
        lg:top-[-0.25rem] lg:w-[200%]      
        xl:top-[-6.25rem]       
        '
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
// bottom-[5%]
//         xs:p-2 xs:bottom-[50%] xs:mt-[2.25rem]
//         md:flex-row md:top-[7.25rem]
//         lg:w-[200%] lg:top-[4.25rem]
//         xl:w-[150%] xl:top-[4.25rem] absolute

// flex justify-center md:flex-row flex-col bg-[var(--black-60)] relative top-[0.25rem] mt-[0.25rem] md:top-[3.25rem] rounded-md xl:w-[150%] p-1 xs:p-2
