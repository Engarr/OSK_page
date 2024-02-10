import Map from '@/components/contact-page/map/map';
import OurLocation from '@/components/new-course-page/our-location/our-location';
import Wrapper from '@/components/ui/wrapper';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const Countdown = dynamic(
  () => import('@/components/new-course-page/counting/counting-down'),
  { ssr: false }
);

const Page = () => {
  return (
    <section className=''>
      <Wrapper style='left-1/2 -translate-x-1/2 flex-col justify-between  h-[100%]'>
        <Countdown />
        <OurLocation />
        <Suspense
          fallback={
            <div className='relative bottom-0 w-full h-[350px] lg:h-[400px]    overflow-hidden text-center ' />
          }>
          <div className='relative bottom-0 w-full h-[250px] lg:h-[350px]    overflow-hidden text-center '>
            <Map />
          </div>
        </Suspense>
      </Wrapper>
    </section>
  );
};

export default Page;
