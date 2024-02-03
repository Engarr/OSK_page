'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type AnimateTextType = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
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

const AnimateText = ({ text, el, style }: AnimateTextType) => {
  return (
    <p className={cn('', style)}>
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
          className='inline-block '>
          {char}
        </motion.span>
      ))}
    </p>
  );
};

export default AnimateText;
