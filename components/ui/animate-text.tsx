'use client';
import React from 'react';
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
      delay: 0.03 * index,
    },
  }),
};

const AnimateText = ({ text, el: Wrapper = 'p', style }: AnimateTextType) => {
  return (
    <Wrapper className={style}>
      <span className='sr-only'>{text}</span>
      <motion.span
        aria-hidden
        initial='hidden'
        animate='visible'
        whileHover='whileHover'>
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            aria-hidden
            variants={defaultAnimation}
            custom={index}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimateText;
