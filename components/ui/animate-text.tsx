'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type AnimateTextType = {
  text: string;
  Element?: keyof JSX.IntrinsicElements;
  style?: string;
};

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),

  whileHover: {
    scale: [1, 1.4, 0.75, 1.25, 0.9, 1],
    scaleY: [1, 0.85, 1.25, 0.85, 1.05, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  },
};

const AnimateText = ({ text, Element = 'p', style }: AnimateTextType) => {
  return (
    <Element className={cn('inline-block', style)}>
      <span className='sr-only'>{text}</span>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          aria-hidden
          variants={defaultAnimation}
          initial='hidden'
          animate='visible'
          whileHover='whileHover'
          transition={{ type: 'spring', stiffness: 300 }}
          custom={index}
          className=''>
          {char}
        </motion.span>
      ))}
    </Element>
  );
};

export default AnimateText;
