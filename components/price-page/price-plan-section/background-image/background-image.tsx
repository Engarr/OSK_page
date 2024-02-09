import React from 'react';
import Image from 'next/image';
import backgroundImage from '@/public/images/price-page-background.jpg';
import backgroundImageMobile from '@/public/images/price-page-background_mobile.jpg';

const BackgroundImage = () => {
  return (
    <div className='opacity-10 absolute h-full w-full top-0 left-0'>
      <Image
        src={backgroundImage}
        alt='backgorund'
        sizes='100vh'
        quality={50}
        fill
        loading='lazy'
        className='hidden lg:inline object-cover z-[-3] '
      />
      <Image
        src={backgroundImageMobile}
        alt='backgorund'
        quality={50}
        sizes='100vh'
        fill
        loading='lazy'
        className='inline lg:hidden object-cover z-[-3] '
      />
    </div>
  );
};

export default BackgroundImage;
