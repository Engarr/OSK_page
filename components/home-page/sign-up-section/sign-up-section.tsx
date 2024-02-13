'use client';
import React, { Suspense } from 'react';
import Wrapper from '../../ui/wrapper';
import ContactForm from './contact-form/contact-form';
import Offer from './offer/offer';
import Image from 'next/image';
import signupBackgroundImg from '@/public/images/408908176_18004249550233455_9060350178127088714_n 1.jpg';
import signupBackgroundImgMobile from '@/public/images/408908176_18004249550233455_9060350178127088714_n 1_mobile.jpg';
import Map from '@/components/contact-page/map/map';
import { motion } from 'framer-motion';

const SignUpSection = () => {
  return (
    <section id='signup' className='relative  target'>
      <Image
        src={signupBackgroundImg}
        alt=''
        fill
        sizes='100vh'
        className='relative object-fill opacity-10  hidden lg:inline-block'
      />
      <Image
        src={signupBackgroundImgMobile}
        alt=''
        fill
        sizes='100vh'
        className='absolute  opacity-20 inline-block lg:hidden'
      />
      <Wrapper style='left-1/2 -translate-x-1/2 flex-col'>
        <motion.div
          className='flexCenter flex-col mt-[20px] w-full px-2 lg:p-0'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          <div>
            <h3 className='text-[var(--main-page-color)]  font-bold mb-0 lg:mb-2 text-lg md:text-xl xl:text-3xl'>
              Zapisz się teraz
            </h3>
          </div>
          <div className='flex justify-center items-center lg:items-start w-full lg:gap-10 gap-2 mt-[20px] lg:flex-row flex-col mb-10'>
            <ContactForm />
            <Offer />
          </div>
        </motion.div>
        <Suspense
          fallback={
            <div className='relative bottom-0 w-full h-[200px] lg:h-[400px] lg:px-5 lg:mt-20' />
          }>
          <div className='relative bottom-0 w-full h-[350px] lg:h-[400px] overflow-hidden text-center '>
            <Map />
          </div>
        </Suspense>
      </Wrapper>
    </section>
  );
};

export default SignUpSection;
