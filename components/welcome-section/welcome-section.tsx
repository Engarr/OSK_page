import React from 'react';
import BackgroundImage from './background-image/background-image';
import WelcomeCard from './welcome-card/welcome-card';

const WelcomeSection = () => {
  return (
    <div className='h-[calc(100vh-82px)] relative'>
      <BackgroundImage />
      <WelcomeCard />
    </div>
  );
};

export default WelcomeSection;
