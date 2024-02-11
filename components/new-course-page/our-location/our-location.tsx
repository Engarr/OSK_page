import NavigateBtn from '@/components/ui/navigate-btn';
import React from 'react';

const OurLocation = () => {
  return (
    <div className='flexCenter flex-col my-5 lg:my-10 text-center lg:text-start'>
      <h4 className='text-lg lg:text-xl mb-2'>
        Dokładna lokalizacja kursu stacjonarnego w Rzeszowie:
      </h4>
      <p>ul. Stefana Żeromskiego 6/4</p>
      <p>35-001 Rzeszów</p>
      <NavigateBtn
        text='Zapisz się już dziś!'
        link='/'
        sectionId='signup'
        style='text-base md:text-xl w-[18rem] h-[3.8rem]  md:w-[19rem] md:h-[4.6rem] z-[30] mt-4 '
      />
    </div>
  );
};

export default OurLocation;
