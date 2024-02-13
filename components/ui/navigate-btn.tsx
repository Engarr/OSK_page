'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type SignUpBtnType = {
  text: string;
  style?: string;
  link: string;
  sectionId?: string;
};

const btnAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const NavigateBtn = ({ text, style, link }: SignUpBtnType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <motion.div
      tabIndex={-1}
      ref={ref}
      variants={btnAnimation}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='z-[20]'>
      <Link
        href={link}
        className={cn(
          'bg-[var(--main-page-color)] rounded-md shadow-2xl text-[var(--text-white-1)] font-bold tracking-wider flexCenter px-2 py-3 ',
          style
        )}>
        {text}
      </Link>
    </motion.div>
  );
};

export default NavigateBtn;
