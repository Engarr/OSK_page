import React, { Suspense } from 'react';
import WhyUs from './why-us/why-us';
import Achievements from './achievements/achievements';

const Video = React.lazy(() => import('./video/video'));
const Opinions = React.lazy(() => import('./opinions/opinions'));

const PersuadeSection = () => {
  return (
    <section className='relative overflow-hidden mt-10'>
      <Suspense fallback={<div>Pobieranie danych...</div>}>
        <div className='relative py-5 flex items-start justify-center gap-4 flex-col lg:flex-row lg:mb-10'>
          <WhyUs />
          <Video />
        </div>
      </Suspense>
      <Achievements />
      <Suspense fallback={<div>Pobieranie danych...</div>}>
        <div className='relative'>
          <Opinions />
        </div>
      </Suspense>
    </section>
  );
};

export default PersuadeSection;
