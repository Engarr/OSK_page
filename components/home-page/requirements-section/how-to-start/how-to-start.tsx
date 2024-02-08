'use client';

import whyQuest from '@/public/images/Why_Quest.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

const motionVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
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

const HowToStart = () => {
  return (
    <motion.div
      className='z-20 relative flex flex-col items-center
      top-[10px] w-full p-2
       md:max-w-[34rem]      
      lg:top-[20px] lg:items-start  
      xl:max-w-[38rem] 
      '
      variants={motionVariants}
      initial='initial'
      whileInView='visible'>
      <div className='flexCenter mb-1 xl:mb-3 relative'>
        <h3 className='font-bold text-[var(--main-page-color)] text-base md:text-xl xl:text-3xl '>
          Jak zacząć
        </h3>
        <Image
          src={whyQuest}
          alt='why_icon'
          className='ml-1 relative -top-[10px]'
        />
      </div>
      <p className='tracking-wider p-2 md:p-0 text-xs md:text-sm xl:text-base'>
        Profil Kandydata na Kierowcę czyli numer PKK trzeba wyrobić w wydziale
        komunikacji ze względu na zameldowanie. Do wyrobienia numeru PKK
        potrzebne są badania lekarskie, zdjęcie profil przód, dokument
        tożsamości (dowód osobisty lub paszport), dodatkowo zgoda rodzica jeżeli
        jest się osobą nie pełnoletnią
      </p>
      <div className='flexCenter  gap-2 mt-4'>
        <DocuementBtn text='Pobierz wniosek PKK' />
        <DocuementBtn
          text='Zgoda rodzica'
          style='bg-transparent text-[var(--main-page-color)] border-solid border-2 border-[var(--main-page-color)]'
        />
      </div>
    </motion.div>
  );
};

export default HowToStart;

type DocuementBtn = {
  text: string;
  style?: string;
};

const DocuementBtn = ({ text, style }: DocuementBtn) => {
  return (
    <motion.button
      variants={btnAnimation}
      whileInView='visible'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={cn(
        'bg-[var(--main-page-color)] rounded-md shadow-2xl text-[var(--text-white-1)] font-bold tracking-wider px-2 py-3 ',
        style
      )}>
      {text}
    </motion.button>
  );
};
