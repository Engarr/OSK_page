import React from 'react';
import BackgroundImage from './background-image/background-image';
import Wrapper from '@/components/ui/wrapper';
import PriceCards from './price-cards/price-cards';
import Details from './details/details';
import NavigateBtn from '@/components/ui/navigate-btn';

const PricePlanSection = () => {
  return (
    <div className=' relative flex w-[100%]  xl:pb-10 lg:pb-0'>
      <BackgroundImage />
      <Wrapper style='left-1/2 -translate-x-1/2 w-full flex-col  gap-2 py-1  xl:py-[6.25rem] '>
        <PriceCards />
        <Details />
        <div className=' w-full md:w-1/2 h-full my-10'>
          <NavigateBtn
            link='/#signup'
            text='Zapisz się już dziś!'
            style='lg:w-1/2 left-1/2 relative -translate-x-1/2'
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default PricePlanSection;
