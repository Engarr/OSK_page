'use client';

import React from 'react';
import Image from 'next/image';
import logo from '@/public/images/logo_PNG.png';
import AnimateText from '@/components/ui/animate-text';
import { motion } from 'framer-motion';
import PlanCard from '../plan-card/plan-card';
import NavigateBtn from '@/components/ui/navigate-btn';

const Title = () => {
  return (
    <div className=' flex flex-col items-center py-0 lg:py-2 lg:gap-2 '>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Image src={logo} alt='logo' className='' width={500} priority />
      </motion.div>
      <div className='flexCenter text-lg s:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[var(--text-white-1)] font-bold w-full z-20'>
        <AnimateText text='Ośrodek Szkolenia Kierowców ' style='' el='h1' />
      </div>

      <NavigateBtn
        text='Zapisz się już dziś!'
        link='/#signup'
        style='text-base md:text-xl w-full h-[2.8rem] md:w-[19rem] md:h-[4.6rem] z-[30] mt-2 lg:mt-4 p-6'
      />

      <PlanCard />
      <div className='mt-10 s:mt-3 lg:mt-5'>
        <NavigateBtn
          link='/nowy-kurs'
          text='Poznaj najbliższy termin kursu'
          style='p-3 md:p-4 text-[10px] xs:text-xs lg:text-base border-solid  mt-0 lg:mt-2 font-semibold lg:font-bold'
        />
      </div>
    </div>
  );
};

export default Title;
