import React from 'react';
import Logo from './logo';
import Navigation from './nav';
import Socialmedia from './socialmedia';

const Header = () => {
  return (
    <section className=' bg-[var(--black-90)] h-[82px] w-full flex items-center lg:justify-around justify-between p-5 lg:p-0'>
      <Logo />
      <div>
        <Navigation />
      </div>
    </section>
  );
};

export default Header;
