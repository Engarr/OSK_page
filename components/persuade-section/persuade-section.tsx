import React from 'react';
import WhyUs from './why-us/why-us';
import Video from './video/video';
import Opinions from './opinions/opinions';

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
