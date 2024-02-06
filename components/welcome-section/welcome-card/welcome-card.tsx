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
        className='bg-[var(--black-80)] flex flex-col md:flex-row gap-1 p-2 rounded-md '
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
{
  /* <div className=' relative h-full flexCenter flex-col w-full lg:w-auto p-2 z-[20] bg-cyan-300'>
      <Title />
      <Btn
        text='Zapisz się już dziś!'
        style='text-base md:text-xl w-[18rem] h-[3.8rem]  md:w-[19rem] md:h-[4.6rem] z-[30] '
      />
      <PlanCard />

      <motion.div
        className='relative flex flex-col justify-center bg-[var(--black-80)] rounded-md 
        p-1 xs:p-2
        top-[1.25rem] mt-[0.25rem]
        xs:mt-[15%]
        s:mt-[20%]
        md:flex-row md:top-[2.25rem]       
        lg:top-[-0.25rem] lg:w-[150%]      
        xl:top-[-6.25rem] xl:w-[110%]      
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
    </div> */
}
