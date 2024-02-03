import React from 'react';
import clsx from 'clsx';

type BtnType = {
  text: string;
  style?: string;
};
const Btn = ({ text, style }: BtnType) => {
  return (
    <button
      className={clsx(
        'bg-[var(--main-page-color)]  rounded-md shadow-2xl text-[var(--text-white-1)] font-bold tracking-wider ',
        style
      )}>
      {text}
    </button>
  );
};

export default Btn;
