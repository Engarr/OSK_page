import React from 'react';
import Btn from '../../ui/btn';
import { moreInfo } from '@/lib/data';
import InfoBox from './info-box/info-box';
import PlanCard from './plan-card/plan-card';

const WelcomeCard = () => {
  return (
    <div className='flexCenter absolute top-[42%] md:top-[45%] left-1/2 -translate-x-1/2  flex-col w-full lg:w-auto p-2'>
      <Btn
        text='Zapisz się już dziś!'
        style='text-base md:text-xl w-[18rem] h-[3.8rem]  md:w-[19rem] md:h-[4.6rem] '
      />
      <PlanCard />

      <div className='flex md:flex-row flex-col bg-[var(--black-60)] relative top-[1rem] mt-[1.25rem] md:top-[3.25rem] rounded-md w-full p-2'>
        {moreInfo.map((i, index) => (
          <React.Fragment key={index}>
            <InfoBox img={i.img} text={i.text} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WelcomeCard;
