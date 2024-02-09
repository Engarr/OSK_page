'use client';
import React from 'react';
import { ActiveFullScreenContextProvider } from './active-full-screen-context';

type ContextProviderType = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProviderType) => {
  return (
    <ActiveFullScreenContextProvider>
      {children}
    </ActiveFullScreenContextProvider>
  );
};

export default ContextProvider;
