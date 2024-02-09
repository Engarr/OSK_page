'use client';

import React from 'react';
import Logo from './logo';
import Navigation from './nav';
import { motion } from 'framer-motion';
import { useActiveFullScreen } from '@/context/active-full-screen-context';

const Header = () => {
  const { isFullScreenActive } = useActiveFullScreen();
  return (
    <>
      {!isFullScreenActive && (
        <motion.section className=' bg-[var(--black-95)] h-[82px] w-full flex items-center lg:justify-around justify-between p-5 lg:p-0 '>
          <Logo />
          <div>
            <Navigation />
          </div>
        </motion.section>
      )}
    </>
  );
};

export default Header;
