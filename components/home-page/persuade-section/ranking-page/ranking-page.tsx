'use client';
import React from 'react';
import ranking_img from '@/public/images/ranking_page.jpg';
import Image from 'next/image';
import Btn from '@/components/ui/btn';
import { motion } from 'framer-motion';

const RankingPage = () => {
  return (
    <motion.div
      className='flexCenter my-2 relative '
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
      <Image src={ranking_img} alt='rakning' />
      <div className='absolute bottom-0'>
        <Btn
          text='Więcej'
          style='py-2 px-4'
          link='https://www.prawo-jazdy-360.pl/ranking-szkol-jazdy/osrodek-szkolenia-kierowcow-neocar/rzeszow'
        />
      </div>
    </motion.div>
  );
};

export default RankingPage;
