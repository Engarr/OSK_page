import React, { createContext, useContext, useState } from 'react';

type ActiveFullScreenContextPropsType = {
  children: React.ReactNode;
};
type ActiveFullScreenContextType = {
  isFullScreenActive: boolean;
  setIsFullScreenActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ActiveFullScreenContext =
  createContext<ActiveFullScreenContextType | null>(null);

export const ActiveFullScreenContextProvider = ({
  children,
}: ActiveFullScreenContextPropsType) => {
  const [isFullScreenActive, setIsFullScreenActive] = useState(false);

  return (
    <ActiveFullScreenContext.Provider
      value={{
        isFullScreenActive,
        setIsFullScreenActive,
      }}>
      {children}
    </ActiveFullScreenContext.Provider>
  );
};

export const useActiveFullScreen = () => {
  const context = useContext(ActiveFullScreenContext);
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionContextProvider'
    );
  }
  return context;
};
