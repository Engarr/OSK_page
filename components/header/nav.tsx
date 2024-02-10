'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import MenuToggleButton from '../ui/menu-toggle-button';
import Socialmedia from './socialmedia';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const url = usePathname();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
      document.body.style.overflow = 'auto';
    } else {
      setIsMenuVisible(true);
      document.body.style.overflow = 'hidden';
    }
  };
  const handleNavigation = () => {
    setIsMenuVisible(false);
    document.body.style.overflow = 'auto';
    scrollTo(0, 0);
  };

  return (
    <>
      <motion.div
        className='flexCenter'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <MenuToggleButton
          onClick={handleToggleMenu}
          isMenuVisible={isMenuVisible}
        />
      </motion.div>
      <nav className='flexCenter'>
        <motion.div
          className={cn(
            'absolute left-0 top-0  bg-[var(--black-95)] w-full h-[100vh] transition-all text-center pt-[12.5rem] tracking-wider lg:relative lg:bg-transparent lg:flexCenter lg:flex-row lg:p-0 lg:w-auto lg:h-auto lg:tracking-normal z-40',
            {
              'left-[100%] lg:left-0 ': !isMenuVisible,
            }
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          <div className='flex flex-col lg:flex-row'>
            <ul className=' flexCenter flex-col lg:flex-row gap-5'>
              {navLinks.map((link) => (
                <motion.li
                  onClick={handleNavigation}
                  key={link.name}
                  className={cn(
                    'text-xl lg:text-base text-[var(--text-white-1)] hover:text-[var(--main-page-color)] transition-colors',
                    {
                      ' font-bold text-[var(--main-page-color)]':
                        link.adress === url,
                    }
                  )}
                  transition={{ type: 'spring', stiffness: 100 }}>
                  <Link href={link.adress}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
            <Socialmedia />
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
