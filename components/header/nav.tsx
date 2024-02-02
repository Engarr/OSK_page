'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import MenuToggleButton from '../menu-toggle-button/menu-toggle-button';
import Socialmedia from './socialmedia';

const Navigation = () => {
  const activeSection = 'OSKNEOCAR';
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <div className='flexCenter'>
        <MenuToggleButton
          toggle={setIsMenuVisible}
          isMenuVisible={isMenuVisible}
        />
      </div>
      <motion.nav
        className='flexCenter'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}>
        <div
          className={clsx(
            'absolute left-0 top-0 bg-[var(--black-90)] w-full h-full transition-all flex text-center flex-col pt-[200px]  tracking-wider lg:relative lg:bg-transparent lg:flexCenter lg:flex-row lg:p-0 lg:w-auto lg:h-auto lg:tracking-normal',
            {
              'left-[100%] lg:left-0': !isMenuVisible,
            }
          )}>
          <ul className=' flexCenter flex-col lg:flex-row gap-3'>
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                className={`text-xl lg:text-base ${
                  activeSection !== link.name
                    ? 'text-[var(--text-white-1)] '
                    : 'text-[var(--main-page-color)] font-semibold'
                }`}
                whileHover={{
                  scale: 1.02,
                  originX: 0,
                  color: 'var(--main-page-color)',
                }}
                transition={{ type: 'spring', stiffness: 100 }}>
                <Link href={link.adress}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
          <Socialmedia />
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
// lg:flexCenter  lg:flex gap-3 xl:gap-4
