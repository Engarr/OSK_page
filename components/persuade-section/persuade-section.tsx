import React from 'react';
import WhyUs from './why-us/why-us';
import Opinions from './opinions/opinions';

const Video = React.lazy(() => import('./video/video'));

const PersuadeSection = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='relative py-5'>
        <WhyUs />
        <Video />
      </div>
      <Opinions />
    </section>
  );
};

export default PersuadeSection;