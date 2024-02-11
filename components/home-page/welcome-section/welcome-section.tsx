import React from 'react';
import BackgroundImage from './background-image/background-image';
import WelcomeCard from './welcome-card/welcome-card';
import Image from 'next/image';
import woman from '@/public/images/welcome_background/woman.png';
import Wrapper from '../../ui/wrapper';

const WelcomeSection = () => {
  return (
    <div className='h-[calc(100vh-83px)]  max-h-[838px] lg:h-[846px] relative overflow-hidden  '>
      <BackgroundImage />

      <Wrapper style='left-1/2 -translate-x-1/2 h-full '>
        <WelcomeCard />
        <div
          className=' absolute bottom-0 right-[-45%] sm:-right-0 md:right-[-15%] xl:right-[15%]  
        w-[400px] 
        s:w-[500px]
        md:w-[500px]
        lg:w-[500px]  
        xl:w-[550px]  
        '>
          <Image
            src={woman}
            alt='zdjęcie kobiety'
            quality={80}
            priority
            className='opacity-95'
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default WelcomeSection;
