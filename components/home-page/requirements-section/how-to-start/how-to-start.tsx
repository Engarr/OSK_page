'use client';

import whyQuest from '@/public/images/Why_Quest.png';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

import { cn } from '@/lib/utils';
import { useRef } from 'react';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      className='z-20 relative flex flex-col items-center
      top-[10px] w-full p-2
       md:max-w-[34rem]      
      lg:top-[20px] lg:items-start  
      xl:max-w-[38rem] 
      '
      variants={motionVariants}
      initial='initial'
      animate={isInView ? 'visible' : 'initial'}>
      <div className='flexCenter mb-1 xl:mb-3 relative'>
        <h2 className='font-bold text-[var(--main-page-color)] text-base md:text-xl xl:text-3xl '>
          Jak zacząć
        </h2>
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
        tożsamości (dowód osobisty lub paszport). Dodatkowo, jeżeli jest się
        osobą niepełnoletnią, wymagana jest również zgoda rodzica. Wyrobiony
        profil przynosimy do OSK, aby wybrać rodzaj kursu.
      </p>
      <div className='flexCenter gap-2 xl:gap-4 mt-4'>
        <DocuementBtn
          text='Pobierz wniosek PKK'
          road='https://osk-neocar.pl/PKK-NEOCAR.pdf'
        />
        <DocuementBtn
          road='https://osk-neocar.pl/Zgoda-rodzica-NEOCAR.pdf'
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
  road: string;
};

const DocuementBtn = ({ text, style, road }: DocuementBtn) => {
  return (
    <motion.a
      href={road}
      target='_blank'
      rel='noopener noreferrer'
      variants={btnAnimation}
      whileInView='visible'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={cn(
        'bg-[var(--main-page-color)] rounded-md shadow-2xl text-[var(--text-white-1)] font-semibold tracking-wider px-2 py-3 xl:px-2 xl:py-3 text-xs xl:text-base ',
        style
      )}>
      {text}
    </motion.a>
  );
};
