'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

type BtnType = {
  text: string;
  style?: string;
  link?: string;
  linkConfig?: string;
};

const btnAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Btn = ({ text, style, link }: BtnType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <motion.button
        tabIndex={-1}
        className={cn(
          'bg-[var(--main-page-color)] rounded-md shadow-2xl text-[var(--text-white-1)] font-bold tracking-wider ',
          style
        )}
        ref={ref}
        variants={btnAnimation}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}>
        {text}
      </motion.button>
    </a>
  );
};

export default Btn;
