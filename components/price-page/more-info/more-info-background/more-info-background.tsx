import React from 'react';
import backgroundImage from '@/public/images/300873859_1197134004168287_3149053915122180687_n 1.jpg';
import Image from 'next/image';

const MoreInfoBackground = () => {
  return (
    <div className='absolute h-full w-full'>
      <Image
        src={backgroundImage}
        alt=''
        sizes='100vw'
        fill
        loading='lazy'
        className='object-cover z-[-3] opacity-10'
      />
    </div>
  );
};

export default MoreInfoBackground;
