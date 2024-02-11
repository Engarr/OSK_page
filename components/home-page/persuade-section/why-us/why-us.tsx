'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const WhyUs = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className='
      md:max-w-[34rem]  
      xl:max-w-[38rem]  
      '
      variants={motionVariants}
      initial='initial'
      animate={isInView ? 'visible' : 'initial'}>
      <div className='flex justify-center lg:justify-start  items-center mb-1 xl:mb-3 relative'>
        <h3 className='font-bold text-[var(--main-page-color)] text-base md:text-xl xl:text-3xl '>
          Dlaczego my?
        </h3>
      </div>
      <p className='tracking-wider p-2 md:p-0 text-xs md:text-sm xl:text-base'>
        Naszą misją jest zapewnienie jak najlepszego wykształcenia przyszłych
        kierowców, nie tylko po to, aby zdali egzamin za pierwszym razem, ale
        przede wszystkim po to, aby nie stanowili zagrożenia dla siebie i dla
        innych na drodze. Aby wyszkolić dobrego kierowcę należy pozwolić mu
        spędzić jak najwięcej czasu za kierownicą. Dlatego staramy się
        maksymalnie wykorzystać czas nauki, za który płaci nasz Klient. W
        naszych rękach możesz czuć się bezpiecznie.
      </p>
    </motion.div>
  );
};

export default WhyUs;
