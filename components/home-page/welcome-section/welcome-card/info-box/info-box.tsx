import React from 'react';
import Image, { StaticImageData } from 'next/image';

type InfoBox = {
  img: StaticImageData;
  text: string;
};

const InfoBox = ({ img, text }: InfoBox) => {
  return (
    <div className='flex items-center '>
      <Image
        src={img}
        alt={text}
        className='w-[20px] md:w-[30px] lg:w-auto mx-1'
        priority
      />
      <h3 className='text-[var(--text-white-1)] text-xs lg:text-base ml-2 font-semibold tracking-wider '>
        {text}
      </h3>
    </div>
  );
};

export default InfoBox;
