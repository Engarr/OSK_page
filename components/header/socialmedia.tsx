import { FacebookSVG } from '@/lib/svg/facebook';
import { InstagramSVG } from '@/lib/svg/instagram';
import React from 'react';

const Socialmedia = () => {
  return (
    <div className='flexCenter gap-5 lg:ml-5 mt-5 lg:mt-0 lg:gap-2  '>
      <FacebookSVG />
      <InstagramSVG />
    </div>
  );
};

export default Socialmedia;
