import React from 'react';
import Image from 'next/image';
import backgroundImage from '@/public/images/bacground-big_devices_2.jpg';
import backgroundTabletImage from '@/public/images/tablet_background.jpg';
import backgroundMobileImage from '@/public/images/mobile_background.jpg';

const BackgroundImage = () => {
  return (
    <div className='h-[calc(100vh-82px)] '>
      <Image
        src={backgroundImage}
        alt='background'
        placeholder='blur'
        quality={100}
        priority
        fill
        sizes='100vh'
        className='hidden xl:inline z-[-3] '
      />
      <Image
        src={backgroundTabletImage}
        alt='background'
        placeholder='blur'
        quality={100}
        priority
        fill
        sizes='100vh'
        className='hiden md:inline xl:hidden z-[-3] opacity-98'
      />
      <Image
        src={backgroundMobileImage}
        alt='background'
        placeholder='blur'
        quality={100}
        priority
        fill
        sizes='100vh'
        className='inline md:hidden z-[-3] opacity-98'
      />
    </div>
  );
};

export default BackgroundImage;
