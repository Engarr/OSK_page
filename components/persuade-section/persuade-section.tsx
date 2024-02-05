import React, { Suspense } from 'react';
import WhyUs from './why-us/why-us';
import Opinions from './opinions/opinions';

const Video = React.lazy(() => import('./video/video'));

const PersuadeSection = () => {
  return (
    <section className='relative overflow-hidden'>
      <Suspense fallback={<div>Pobieranie danych...</div>}>
        <div className='relative py-5'>
          <WhyUs />
          <Video />
        </div>
      </Suspense>
      <Opinions />
    </section>
  );
};

export default PersuadeSection;
