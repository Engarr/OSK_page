import NavigateBtn from '@/components/ui/navigate-btn';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

type PricePlanCardype = {
  id: string;
  title: string;
  planTitle: string;
  price: string;
  characteristic: string[];
};

const PricePlanCard = ({
  id,
  title,
  planTitle,
  price,
  characteristic,
}: PricePlanCardype) => {
  return (
    <div
      key={id}
      className='bg-[var(--background-white-2)] rounded-md flex flex-col items-center gap-2 py-10 max-w-[450px] w-full lg:min-h-[650px] shadow-xl'>
      <div className=' flexCenter flex-col w-full gap-1'>
        <h1 className='font-bold text-base lg:text-xl xl:text-2xl'>{title}</h1>
        <h2 className='font-light text-sm lg:text-base xl:text-lg'>
          {planTitle}
        </h2>
        <p className=''>
          <span className='text-sm'>PLN </span>
          <span className='font-bold text-lg xl:text-2xl text-[var(--main-page-color)]'>
            {price}
          </span>
        </p>
        <div className='h-[1px] lg:h-[2px] w-[90%] bg-[var(--main-page-color-70)]' />
        <div className='w-[90%] py-1 lg:py-2 '>
          <NavigateBtn text='Zapisz się' link='/#signup' style='py-2 ' />
        </div>
      </div>
      <div className='xl:w-3/4 w-[90%] '>
        <ul className='flex flex-col gap-1 xl:gap-2  '>
          {characteristic.map((c, index) => (
            <li key={index} className='flex text-sm gap-1 xl:gap-2  '>
              <IoMdCheckmark className='min-w-[15px] min-h-[15px] mt-1 text-[var(--main-page-color)]' />
              <p className=''>{c}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricePlanCard;
