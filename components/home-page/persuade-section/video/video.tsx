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
      className=' max-w-[100%] lg:h-[400px] w-[100%] lg:w-[50%] p-1 lg:p-0'
      variants={motionVariants}
      initial='initial'
      animate={isInView ? 'visible' : 'initial'}>
      <div
        className='w-full h-[100%] relative 
         lg:w-[100%]
         xl:w-[100%]  aspect-video'>
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
