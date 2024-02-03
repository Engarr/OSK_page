import React from 'react';
import { FacebookSVG } from '@/lib/svg/facebook';
import { InstagramSVG } from '@/lib/svg/instagram';
import { TiktokSVG } from '@/lib/svg/tiktok';

const Socialmedia = () => {
  return (
    <div className='flexCenter gap-7 mt-9 lg:ml-5 lg:mt-0 lg:gap-2  '>
      <FacebookSVG />
      <InstagramSVG />
      <TiktokSVG />
    </div>
  );
};

export default Socialmedia;
