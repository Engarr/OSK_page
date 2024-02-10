import React from 'react';
import { linksMobile } from '@/lib/links';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import Socialmedia from './socialmedia';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type MobileMenuProps = {
  handleToggleMenu: () => void;
  menuVisible: boolean;
};

const MobileMenu = ({ handleToggleMenu, menuVisible }: MobileMenuProps) => {
  const url = usePathname();

  const handleCloseMenu = () => {
    handleToggleMenu();
    document.body.style.overflowX = 'hidden';
  };

  return (
    <nav className='absolute  lg:hidden overflow-hidden z-[20] '>
      <AnimatePresence>
        {menuVisible && (
          <motion.div
            className='bg-black bg-opacity-20 w-screen h-screen pt-10 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseMenu}>
            <motion.div
              className='absolute bg-black h-screen w-[100%] left-0 z-[20] flex justify-start items-center flex-col pt-20 gap-2'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              onClick={(event) => {
                event.stopPropagation();
              }}>
              <ul className='flex items-center flex-col gap-4 text-[var(--text-white-1)] text-lg '>
                {linksMobile.map((link) => (
                  <li
                    key={link.hash}
                    className={cn('', {
                      ' font-bold text-[var(--main-page-color)]':
                        link.hash === url,
                    })}>
                    <Link href={link.hash} onClick={handleCloseMenu}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Socialmedia />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileMenu;
