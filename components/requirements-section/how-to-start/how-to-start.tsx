'use client';

import whyQuest from '@/public/images/Why_Quest.png';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const motionVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const HowToStart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      className='z-40 relative flex flex-col items-center
      top-[10px] w-full p-2
       md:max-w-[24rem]      
      lg:top-[20px] lg:items-start  
      xl:max-w-[34rem] 
      '
      variants={motionVariants}
      initial='initial'
      animate={isInView ? 'visible' : 'initial'}>
      <div className='flexCenter mb-1 xl:mb-3 relative'>
        <h3 className='font-bold text-[var(--main-page-color)] text-base md:text-xl xl:text-3xl '>
          Jak zacząć
        </h3>
        <Image
          src={whyQuest}
          alt='why_icon'
          className='ml-1 relative -top-[10px]'
        />
      </div>
      <p className='tracking-wider p-2 md:p-0 text-xs md:text-sm xl:text-base'>
        Pierwszym krokiem jest uzyskanie Profilu Kandydata na Kierowcę (PKK) w
        wydziale komunikacji swojego urzędu. Niepełnolenia osoba wymaga
        obecności rodzica/opiekuna lub pisemnej zgody
      </p>
    </motion.div>
  );
};

export default HowToStart;
