'use client';

import React from 'react';
import Logo from './logo';
import Navigation from './nav';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.section className=' bg-[var(--black-90)] h-[82px] w-full flex items-center lg:justify-around justify-between p-5 lg:p-0'>
      <Logo />
      <div>
        <Navigation />
        <motion.div
          className='lg:w-[100%] lg:bg-[var(--line-color)] 
        lg:h-[1px] lg:mt-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
    </motion.section>
  );
};

export default Header;
