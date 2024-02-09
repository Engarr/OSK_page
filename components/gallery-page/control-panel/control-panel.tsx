import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const actions = [
  { Icon: IoIosArrowBack, action: 'onPrev' },
  { Icon: IoClose, action: 'onClose' },
  { Icon: IoIosArrowForward, action: 'onNext' },
];

type ControlPanelType = {
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const ControlPanel = ({ onClose, onNext, onPrev }: ControlPanelType) => {
  const handleAction = (action: () => void) => {
    action();
  };

  return (
    <div className='absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[200px] h-[50px] bg-[var(--white-50)] z-[110] flex justify-around items-center rounded-2xl '>
      {actions.map(({ Icon, action }, index) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={index}
          className='relative shadow-md bg-cyan-50 px-3  py-2 rounded-full cursor-pointer'
          onClick={() =>
            handleAction(
              action === 'onClose'
                ? onClose
                : action === 'onPrev'
                ? onPrev
                : onNext
            )
          }>
          <Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default ControlPanel;
