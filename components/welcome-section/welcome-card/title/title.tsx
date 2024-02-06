'use client';

import React from 'react';
import Image from 'next/image';
import logo from '@/public/images/logo_PNG.png';
import AnimateText from '@/components/ui/animate-text';
import { motion } from 'framer-motion';
import Btn from '@/components/ui/btn';
import PlanCard from '../plan-card/plan-card';

const Title = () => {
  return (
    <div className=' flex flex-col items-center py-2 '>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Image src={logo} alt='logo' className='' width={500} priority />
      </motion.div>
      <h1 className='flexCenter text-lg s:text-xl lg:text-3xl xl:text-3xl 2xl:text-5xl mt-5 text-[var(--text-white-1)] font-bold w-full z-20'>
        <AnimateText text='Ośrodek' style=' pr-2 xl:pr-4' />

        <AnimateText text='Szkolenia' style=' pr-2 xl:pr-4' />
        <AnimateText text='Kierowców' />
      </h1>
      <Btn
        text='Zapisz się już dziś!'
        style='text-base md:text-xl w-[18rem] h-[3.8rem]  md:w-[19rem] md:h-[4.6rem] z-[30] mt-4'
      />
      <PlanCard />
    </div>
  );
};

export default Title;
