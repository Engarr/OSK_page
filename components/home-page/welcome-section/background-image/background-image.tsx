import React from 'react';
import Image from 'next/image';
import backgroundImage from '@/public/images/welcome_background/welcome_background_img.jpg';

const BackgroundImage = () => {
  return (
    <div className='h-[calc(100vh-82px)] lg:h-[846px] absolute top-0 right-0 w-full'>
      <Image
        src={backgroundImage}
        alt=''
        placeholder='blur'
        quality={80}
        priority
        fill
        sizes='100vh'
        className='z-[-3] object-cover fixed'
      />
    </div>
  );
};

export default BackgroundImage;
