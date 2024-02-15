'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BurgerMenuBtn from '@/components/ui/menu-toggle-button';

import { usePathname } from 'next/navigation';
import MobileMenu from './mobile-menu';
import { links } from '@/lib/links';
import { cn } from '@/lib/utils';
import logo from '@/public/images/logo_PNG.png';
import Socialmedia from './socialmedia';

const Header = () => {
  const url = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    if (menuVisible) {
      setMenuVisible(false);
      document.body.style.overflow = 'auto';
    } else {
      setMenuVisible(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <motion.header
        className={cn(
          'flex fixed sm:justify-center justify-between w-[100%] h-[83px] z-[100] top-0 bg-black text-[var(--text-white-1)] ',
          {}
        )}
        variants={{
          visible: { y: 0 },
          hidden: { y: -200 },
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <motion.nav
          className='sm:container flex justify-between lg:justify-around items-center py-2 w-[100vw]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <motion.div
            className='lg:w-[187px] lg:h-[62px] w-[120px] h-[62px] flexCenter z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 100 }}>
            <Link href='/'>
              <Image
                src={logo}
                alt='neocar_logo'
                priority
                onClick={() => setMenuVisible(false)}
              />
            </Link>
          </motion.div>
          <div className='hidden lg:flex '>
            <div className='items-center py-4 px-5'>
              <ul className='flex gap-4  items-center  '>
                {links.map((link, index) => (
                  <li
                    key={index}
                    className={cn(
                      'text-xl lg:text-base text-[var(--text-white-1)] hover:text-[var(--main-page-color)] transition-colors',
                      {
                        ' font-bold text-[var(--main-page-color)]':
                          link.path === url,
                      }
                    )}>
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <Socialmedia />
          </div>
          <motion.div
            className='relative lg:hidden pr-2 py-4 mr-2 sm:pr-3 z-30 '
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}>
            <BurgerMenuBtn
              isMenuVisible={menuVisible}
              onClick={handleToggleMenu}
            />
          </motion.div>
        </motion.nav>
        <MobileMenu
          handleToggleMenu={handleToggleMenu}
          menuVisible={menuVisible}
        />
      </motion.header>
    </>
  );
};

export default Header;
