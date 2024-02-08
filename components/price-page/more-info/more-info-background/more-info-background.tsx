import React from 'react';
import backgroundImage from '@/public/images/300873859_1197134004168287_3149053915122180687_n 1.jpg';
import Image from 'next/image';

const MoreInfoBackground = () => {
  return (
    <div>
      <Image
        src={backgroundImage}
        alt=''
        sizes='100vw'
        fill
        priority
        className='object-cover z-[-3]  opacity-15'
      />
    </div>
  );
};

export default MoreInfoBackground;
