import React from 'react';
import BackgroundImage from './background-image/background-image';
import Wrapper from '@/components/ui/wrapper';
import PriceCards from './price-cards/price-cards';
import Details from './details/details';

const PricePlanSection = () => {
  return (
    <div className=' relative flex w-[100%]  pb-10 lg:pb-0'>
      <BackgroundImage />
      <Wrapper style='left-1/2 -translate-x-1/2 w-full flex-col  gap-2 py-5 xl:py-[6.25rem] '>
        <PriceCards />
        <Details />
      </Wrapper>
      <div className='relative'>
        <div className='w-full h-[32px]  bottom-0 gradient-background absolute ' />
      </div>
    </div>
  );
};

export default PricePlanSection;
