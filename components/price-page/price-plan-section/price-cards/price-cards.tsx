import { pricePlans } from '@/lib/data';
import React from 'react';
import PricePlanCard from './price-plan-card/price-plan-card';

const PriceCards = () => {
  return (
    <div className='relative  mt-[83px]'>
      <div className='flex justify-center items-start gap-2 lg:gap-10  flex-wrap relative w-[100%] top-5 xl:top-0 '>
        {pricePlans.map((plan) => (
          <PricePlanCard
            key={plan.id}
            id={plan.id}
            title={plan.title}
            planTitle={plan.planTitle}
            price={plan.price}
            characteristic={plan.characteristic}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceCards;
