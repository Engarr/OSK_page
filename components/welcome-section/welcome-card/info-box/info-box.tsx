import Image, { StaticImageData } from 'next/image';
import React from 'react';

type InfoBox = {
  img: StaticImageData;
  text: string;
};

const InfoBox = ({ img, text }: InfoBox) => {
  return (
    <div className=' flex items-center p-1 md:p-2 lg:p-5 '>
      <Image src={img} alt={text} className='w-[20px] md:w-[30px] lg:w-auto' />
      <p className='text-[var(--text-white-1)] text-xs xl:text-base ml-2 font-semibold tracking-wider '>
        {text}
      </p>
    </div>
  );
};

export default InfoBox;
