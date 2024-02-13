'use client';

import React, { Suspense } from 'react';
import Wrapper from '@/components/ui/wrapper';
import ContactInfo from '@/components/contact-page/contact-info/contact-info';
import ContactForm from '@/components/home-page/sign-up-section/contact-form/contact-form';
import Map from '@/components/contact-page/map/map';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div className='overflow-hidden mt-5 '>
      <Wrapper style='left-1/2 -translate-x-1/2 flex-col lg:mt-20 px-0'>
        <motion.div
          className='flex items-center justify-center rounded-md
          w-full flex-col-reverse lg:flex-row gap-4 xl:gap-5 mb-10 xl:mb-0 px-2 mt-[83px]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          <ContactForm />
          <ContactInfo />
        </motion.div>
        <Suspense
          fallback={
            <div className='relative bottom-0 w-full h-[200px] lg:h-[400px] lg:px-5 lg:mt-20 bg-transparent' />
          }>
          <h2 className=' text-xl xl:text-2xl font-semibold text-[var(--main-page-color)] lg:my-10'>
            Tu nas znajdziesz
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='relative bottom-0 w-full h-[350px] lg:h-[400px] px-2   overflow-hidden text-center '>
            <Map />
          </motion.div>
        </Suspense>
      </Wrapper>
    </div>
  );
};

export default Page;
