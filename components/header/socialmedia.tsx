import React from 'react';
import { FacebookSVG } from '@/lib/svg/facebook';
import { InstagramSVG } from '@/lib/svg/instagram';
import { TiktokSVG } from '@/lib/svg/tiktok';

const Socialmedia = () => {
  return (
    <div className='flexCenter gap-7 mt-9 lg:ml-5 lg:mt-0 lg:gap-2  '>
      <a
        href='https://www.facebook.com/oskNeocar'
        target='_blank'
        rel='noopener noreferrer'>
        <FacebookSVG />
      </a>

      <a
        href='https://www.instagram.com/oskneocar/'
        target='_blank'
        rel='noopener noreferrer'>
        <InstagramSVG />
      </a>
      <a
        href='https://www.tiktok.com/@oskneocar'
        target='_blank'
        rel='noopener noreferrer'>
        <TiktokSVG />
      </a>
    </div>
  );
};

export default Socialmedia;
