'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Steps from '../steps/steps';

const motionVariants = {
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

const WhatNext = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      className='z-[10]  mt-5 relative w-full
    lg:px-5  '
      ref={ref}
      variants={motionVariants}
      initial='initial'
      animate={isInView ? 'visible' : 'initial'}>
      <div className='flex justify-center lg:justify-start  items-center mb-1 xl:mb-3 relative w-full'>
        <h3 className='font-bold text-[var(--main-page-color)] text-base md:text-xl xl:text-3xl '>
          Co dalej...
        </h3>
      </div>
      <p className='tracking-wider p-2 md:p-0 text-xs md:text-sm xl:text-base'>
        Kurs rozpoczynamy od zajęć teoretycznych, a następnie przechodzimy
        płynnie do nauki praktycznej jazdy. Kurs podstawowy obejmuje 30 godzin
        jazd, dostosowanych do możliwości kursantów. Po ukończeniu kursu,
        przystępujemy do dwóch egzaminów wewnętrznych (teoretyczny i
        praktyczny). Po ich zaliczeniu aktualizujemy dane w Twoim PKK i
        pozostają jedynie egzaminy państwowe.
      </p>
      <Steps />
    </motion.div>
  );
};

export default WhatNext;
