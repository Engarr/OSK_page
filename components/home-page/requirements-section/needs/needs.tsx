'use client';

import React from 'react';
import { requirements } from '@/lib/data';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const titleVariant = {
  initial: {
    opacity: 0,
    x: 100,
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
const requirementsVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 * index,
      type: 'spring',
      stiffness: 300,
    },
  }),
};

const Needs = () => {
  const ref = useRef(null);
  const refReq = useRef(null);
  const isTitleInView = useInView(ref, { once: true, amount: 0.5 });
  const isRequirementsInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      className='z-[10] p-2 relative w-full flex flex-col items-center
      lg:px-5 top-[10px] lg:items-start
    '>
      <motion.h3
        ref={ref}
        className='font-bold text-[var(--main-page-color)]  mb-1 xl:mb-3 text-center md:text-start text-base md:text-xl xl:text-3xl'
        variants={titleVariant}
        initial='initial'
        animate={isTitleInView ? 'visible' : 'initial'}>
        Wymagania do wyrobienia PKK w wydziale komunikacji:
      </motion.h3>
      <div ref={refReq}>
        {requirements.map((r, index) => (
          <motion.div
            key={index}
            className='flex flex-col mt-1 md:mt-2  md:px-0'
            custom={index}
            variants={requirementsVariant}
            initial='hidden'
            animate={isRequirementsInView ? 'visible' : 'hidden'}>
            <div className='flex items-center justify-start gap-2 '>
              <div className='max-w-[40px] max-h-[40px] h-full w-full'>
                <Image
                  src={r.img}
                  alt='Zdjęcie wymagania'
                  className=''
                  width={40}
                  height={40}
                />
              </div>
              <p className=' text-xs md:text-sm xl:text-base'>{r.text}</p>
            </div>
            <div className='md:block w-[100%] relative  bg-[var(--line-color)] h-[1px] mt-1 lg:mt-4' />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Needs;
