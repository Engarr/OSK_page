'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import MenuToggleButton from '../menu-toggle-button/menu-toggle-button';
import Socialmedia from './socialmedia';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const activeSection = 'OSKNEOCAR';
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <motion.div
        className='flexCenter'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <MenuToggleButton
          toggle={setIsMenuVisible}
          isMenuVisible={isMenuVisible}
        />
      </motion.div>
      <nav className='flexCenter '>
        <motion.div
          className={cn(
            'left-0 top-0 bg-[var(--black-95)] w-full h-full transition-all fixed text-center pt-[12.5rem] tracking-wider lg:relative lg:bg-transparent lg:flexCenter lg:flex-row lg:p-0 lg:w-auto lg:h-auto lg:tracking-normal z-40',
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
                  key={link.name}
                  className={`text-xl lg:text-base ${
                    activeSection !== link.name
                      ? 'text-[var(--text-white-1)] '
                      : 'text-[var(--main-page-color)] font-semibold'
                  }`}
                  whileHover={{
                    scale: 1.02,
                    color: 'var(--main-page-color)',
                  }}
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
