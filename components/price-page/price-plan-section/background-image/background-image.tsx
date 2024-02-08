import React from 'react';
import Image from 'next/image';
import backgroundImage from '@/public/images/price-page-background.jpg';
import backgroundImageMobile from '@/public/images/price-page-background_mobile.jpg';

const BackgroundImage = () => {
  return (
    <div className='opacity-20'>
      <Image
        src={backgroundImage}
        alt='backgorund'
        sizes='100vw'
        fill
        priority
        className='hidden lg:inline object-cover z-[-3] '
      />
      <Image
        src={backgroundImageMobile}
        alt='backgorund'
        sizes='100vw'
        fill
        priority
        className='inline lg:hidden object-cover z-[-3] '
      />
    </div>
  );
};

export default BackgroundImage;
