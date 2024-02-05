import React from 'react';
import Image from 'next/image';
import backgroundImage from '@/public/images/welcome_background/welcome_background_img.jpg';
import woman from '@/public/images/welcome_background/woman.png';

const BackgroundImage = () => {
  return (
    <div className='h-[calc(100vh-82px)]'>
      <Image
        src={backgroundImage}
        alt='background'
        placeholder='blur'
        quality={100}
        priority
        fill
        sizes='100vh'
        className='z-[-3] object-cover'
      />
      <Image
        src={woman}
        alt='zdjęcie kobiety'
        quality={100}
        priority
        className='
        w-[450px] right-[-35%] bottom-0
        s:w-[550px]
        md:right-[-10%] md:w-[550px]
        lg:w-[500px] lg:right-[-5%] 
        xl:w-[550px] xl:right-[15%] 
        2xl:right-[20%] 
        absolute z-[-2]'
      />
    </div>
  );
};

export default BackgroundImage;
