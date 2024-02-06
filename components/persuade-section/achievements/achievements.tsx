import { opinions } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const Achievements = () => {
  return (
    <div className=' flexCenter gap-3 xl:gap-10 flex-col md:flex-row p-2'>
      {opinions.map((opinion, index) => (
        <div
          key={index}
          className='flexCenter flex-col rounded-md font-bold  bg-[var(--main-page-color-70)] text-[var(--text-white-1)] 
          px-1 py-2
          xl:px-3 xl:py-5 w-full
          lg:max-w-[350px] xl:gap-4'>
          <p className='text-lg xl:text-2xl'>{opinion.text}</p>
          <div className='flex items-end gap-3'>
            <p className=' text-base xl:text-xl tracking-wider'>
              {opinion.text_2}
            </p>
            <Image src={opinion.img} alt='ikona' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
