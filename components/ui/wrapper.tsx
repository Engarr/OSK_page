import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

type WrapperType = {
  children: ReactNode;
  style?: string;
};

const Wrapper = ({ children, style }: WrapperType) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center relative max-w-[1920px] px-2 ',
        style
      )}>
      {children}
    </div>
  );
};

export default Wrapper;
