'use client';

import React, { useState } from 'react';
import Logo from './logo';
import Navigation from './nav';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useActiveFullScreen } from '@/context/active-full-screen-context';

const Header = () => {
  const { isFullScreenActive } = useActiveFullScreen();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    console.log(previous);
    if (typeof previous !== 'undefined' && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {!isFullScreenActive && (
        <motion.nav
          className=' bg-[var(--black-95)] h-[82px] w-full flex items-center lg:justify-around justify-between p-5 lg:p-0 z-[100] sticky  top-0   '
          variants={{
            visible: { y: 0 },
            hidden: { y: '-100%' },
          }}
          animate={hidden ? 'hidden' : 'visible'}>
          <Logo />
          <div>
            <Navigation />
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Header;

// useMotionValueEvent(scrollY, 'change', (latest) => {
//   const previous = scrollY.getPrevious();
//   console.log(previous);
//   if (typeof previous !== 'undefined' && latest > previous && latest > 150) {
//     setHidden(true);
//   } else if (latest <= 100) {
//     setIsTop(true);
//   } else {
//     setHidden(false);
//     setIsTop(false);
//   }
// });

// className={cn(
//   'bg-[var(--black-95)] h-[82px] w-full flex items-center lg:justify-around justify-between p-5 lg:p-0  z-[100] sticky',
//   { fixed: !isTop }
// )}
