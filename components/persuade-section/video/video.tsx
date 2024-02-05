'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const motionVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};


const Video = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className='w-full h-[400px]'
      variants={motionVariants}
      initial='initial'
      animate={isInView ? 'visible' : 'initial'}>
      <div
        className=' w-full h-[80%] relative p-1
      md:w-[80%]  md:-translate-x-1/2 md:left-[50%] md:mt-5
      lg:w-[50%]
      xl:h-[100%] xl:left-[65%] xl:top-[-10%] xl:w-[45%] '>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/i-0-TGq00OE'
          title='Zapraszamy na kurs prawo jazdy'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          loading='lazy'
        />
      </div>
    </motion.div>
  );
};

export default Video;
