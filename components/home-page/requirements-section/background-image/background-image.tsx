import React from 'react';
import Image from 'next/image';
import backgroundImage from '@/public/images/next_step_background.jpg';
import backgroundTabletImage from '@/public/images/next_step_background_tablet.jpg';
import backgroundMobileImage from '@/public/images/next_step_background_phone.jpg';

const BackgroundImage = () => {
  return (
    <div className='absolute top-0 bg-[var(--white-80)] w-full h-full'>
      <Image
        src={backgroundImage}
        alt='bg-next-setp'
        fill
        quality={80}
        sizes='100vh'
        className='object-cover z-[-10] opacity-50 hidden xl:inline '
      />
      <Image
        src={backgroundTabletImage}
        alt='bg-next-setp'
        fill
        quality={80}
        sizes='100vh'
        className='object-cover z-[-10] opacity-50 hidden md:inline xl:hidden '
      />
      <Image
        src={backgroundMobileImage}
        alt='bg-next-setp'
        fill
        quality={80}
        sizes='100vh'
        className='object-cover z-[-10] opacity-50 inline md:hidden'
      />
    </div>
  );
};

export default BackgroundImage;

