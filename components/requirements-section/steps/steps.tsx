'use client';

import React, { useRef } from 'react';
import happy from '@/public/images/Happy.png';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const steps = [
  { number: '1', text: 'Po uzyskaniu PKK zgłoś się do nas' },
  { number: '2', text: 'Zapisz się na wybrany rodzaj kursu' },
  { number: '3', text: 'Zaczynamy!', icon: happy },
];
const stepsVariant = {
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

const Steps = () => {
  const ref = useRef(null);
  const stepsInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      className='lg:mt-4 flex flex-col items-center justify-center'
      ref={ref}>
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          variants={stepsVariant}
          custom={index}
          initial='hidden'
          animate={stepsInView ? 'visible' : 'hidden'}>
          <div className='flexCenter'>
            <p
              className=' bg-[var(--main-page-color-70)] lg:p-2 rounded-full 
            w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flexCenter text-[var(--text-white-1)] font-semibold text-lg lg:text-2xl my-2 lg:m-3'>
              {step.number}
            </p>
          </div>
          <p className='text-sm lg:font-semibold lg:text-lg flexCenter'>
            {step.text}{' '}
            {step.icon && typeof step.icon !== 'string' && (
              <Image
                src={step.icon}
                alt={`Step ${step.number} icon`}
                width={50}
                height={50}
                className='ml-2'
              />
            )}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Steps;
