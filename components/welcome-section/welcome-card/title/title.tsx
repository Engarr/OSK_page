'use client';

import React from 'react';
import Image from 'next/image';
import logo from '@/public/images/logo_PNG.png';
import AnimateText from '@/components/ui/animate-text';
import { motion } from 'framer-motion';

const Title = () => {
  return (
    <div className='absolute top-[-70%] flexCenter flex-col'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Image src={logo} alt='logo' className='' width={500} />
      </motion.div>
      <h1 className='flexCenter text-lg s:text-xl lg:text-3xl xl:text-3xl 2xl:text-5xl mt-5 text-[var(--text-white-1)] font-bold w-full'>
        <AnimateText text='Ośrodek' style=' pr-2 xl:pr-4' />

        <AnimateText text='Szkolenia' style=' pr-2 xl:pr-4' />
        <AnimateText text='Kierowców' />
      </h1>
    </div>
  );
};

export default Title;
