'use client';
import { pricePlans } from '@/lib/data';
import React, { useMemo, useState } from 'react';
import PricePlanCard from './price-plan-card/price-plan-card';
import { DataState } from '@/lib/acf-type';

const PriceCards = () => {
  const [data, setData] = useState<DataState>({
    pageData: [],
    loading: true,
  });

  useMemo(async () => {
    const response = await fetch(
      'https://osk-neocar.pl/wp/wp-json/wp/v2/info?acf_format=standard&_fields=id,title,acf'
    );
    const pageData = await response.json();
    setData({ pageData, loading: false });
  }, []);

  return (
    <div className='relative  mt-[83px]'>
      <div className='flex justify-center items-start gap-2 lg:gap-10  flex-wrap relative w-[100%] top-5 xl:top-0 '>
        {pricePlans.map((plan) => (
          <PricePlanCard
            key={plan.id}
            id={plan.id}
            title={plan.title}
            planTitle={plan.planTitle}
            price={
              data.loading
                ? ' Ładowanie...'
                : plan.id === 'fast'
                ? data.pageData[0].acf.cena_za_kurs_przyspieszony.toString()
                : data.pageData[0].acf.cena_za_kurs_podstawowy.toString()
            }
            characteristic={plan.characteristic}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceCards;
