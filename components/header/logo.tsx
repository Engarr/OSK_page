'use client';

import React from 'react';
import logo from '@/public/images/logo_PNG.png';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      className='lg:w-[187px] lg:h-[62px] w-[120px] h-[62px] flexCenter z-50'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 100 }}>
      <Link href='/'>
        <Image src={logo} alt='neocar_logo' priority />
      </Link>
    </motion.div>
  );
};

export default Logo;
