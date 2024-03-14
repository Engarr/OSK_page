'use client';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import car from '@/public/images/car.png';
import AnimateText from '@/components/ui/animate-text';
import { motion } from 'framer-motion';
import { DataState } from '@/lib/acf-type';

const PlanCard = () => {
  const textStyle = 'font-extrabold pr-1 mt-0 lg:pr-2 lg:mt-2 ';
  const [data, setData] = useState<DataState>({
    pageData: [],
    loading: true,
  });

  useMemo(async () => {
    const response = await fetch(
      'https://osk-neocar.pl/wp/wp-json/wp/v2/info?acf_format=standard&_fields=id,title,acf'
    );
    const pageData = await response.json();
    setData({ pageData, loading: false });
  }, []);

  const priceForBasicCourse = data.loading
    ? '.... '
    : data &&
      data.pageData[0]?.acf &&
      data.pageData[0].acf.cena_za_kurs_podstawowy.toString();

  return (
    <div className='flexCenter relative'>
      <motion.div
        className='hiden absolute h-full md:right-[156px] md:top-[-112px] md:w-[315px] md:h-[358px] lg:right-[164px] lg:top-[-132px] lg:w-[404px] lg:h-[446px] z-0 mr-10'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}>
        <Image src={car} alt='car_photo' priority fill sizes='100vh' />
      </motion.div>
      <div className='flexCenter flex-col mt-3 lg:mt-10 text-lg lg:text-2xl z-10 text-[var(--text-white-1)] font-semibold'>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Kategoria B już od
        </motion.h2>

        <div className='flex items-end'>
          <motion.p
            className={`${textStyle}  text-2xl lg:text-3xl xl:text-4xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            {priceForBasicCourse}
            <span className={`${textStyle} text-base ml-1`}>PLN</span>
          </motion.p>
        </div>

        <motion.div
          className=' md:block w-[120%] relative  bg-[var(--line-color)] h-[1px] mt-0 lg:mt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
    </div>
  );
};

export default PlanCard;
