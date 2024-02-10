'use client';

import React from 'react';
import Logo from './logo';
import Navigation from './nav';
import { useActiveFullScreen } from '@/context/active-full-screen-context';

const Header = () => {
  const { isFullScreenActive } = useActiveFullScreen();

  return (
    <>
      {!isFullScreenActive && (
        <header>
          <nav className=' bg-[var(--black-95)] h-[82px] w-full flex items-center lg:justify-around justify-between p-5 lg:p-0 z-[100] top-0 '>
            <Logo />
            <div>
              <Navigation />
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
