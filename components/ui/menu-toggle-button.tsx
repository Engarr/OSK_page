import React from 'react';
import { motion } from 'framer-motion';

type MenuToggleButtonProps = {
  onClick: () => void;
  isMenuVisible: boolean;
};

const Path = (props: any) => {
  return <motion.path strokeWidth='3' strokeLinecap='round' {...props} />;
};

const MenuToggleButton = ({
  onClick,
  isMenuVisible = false,
}: MenuToggleButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className='z-[999] lg:hidden p-1 outline-[var(--main-page-color)] '
      animate={isMenuVisible ? 'open' : 'closed'}
      type='button'
      title='nav-btn'>
      <motion.svg
        width='33'
        height='33'
        viewBox='0 0 33 33'
        stroke='var(--main-page-color)'>
        <Path
          d='M 2 9.5 L 30 9.5'
          variants={{
            closed: { d: 'M 2 9.5 L 30 9.5' },
            open: { d: 'M 1.5 29 L 31 5' },
          }}
        />
        <Path
          d='M 2 16.5 L 30 16.5'
          variants={{
            closed: { opacity: 1, x: 0, transition: { delay: 0.125 } },
            open: { opacity: 0, x: 100 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          d='M 2 23.5 L 30 23.5'
          variants={{
            closed: { d: 'M 2 23.5 L 30 23.5' },
            open: { d: 'M 2 5 L 31.5 29' },
          }}
        />
      </motion.svg>
    </motion.button>
  );
};

export default MenuToggleButton;
