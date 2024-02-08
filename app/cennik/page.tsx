import React from 'react';
import PricePlanSection from '@/components/price-page/price-plan-section/price-plan-section';
import MoreInfo from '@/components/price-page/more-info/more-info';

const Page = () => {
  return (
    <>
      <PricePlanSection />
      <div className='relative'>
        <div className='w-full h-[32px]  bottom-0 gradient-background absolute ' />
        <div className='w-full h-[32px]  top-0 gradient-background-down absolute ' />
      </div>
      <MoreInfo />
    </>
  );
};

export default Page;
