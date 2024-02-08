import React from 'react';
import Wrapper from '@/components/ui/wrapper';
import MoreInfoBackground from './more-info-background/more-info-background';
import { IoMdCheckmark } from 'react-icons/io';
import NavigateBtn from '@/components/ui/navigate-btn';

const listData = [
  'Nie chcesz dostosowywać się do sztywnych, narzucanych terminów szkoleń?',
  'Nie masz czasu na regularne uczęszczanie na zajęcia?',
  'Nie chcesz czekać, aż zbierze się grupa na kurs?',
  'Chcesz przejść szkolenie łatwo i bez stresu?',
];

const MoreInfo = () => {
  return (
    <div className='relative  flexCenter '>
      <MoreInfoBackground />
      <Wrapper style='flex-col gap-4 w-full'>
        <div className='p-2 my-[100px]  font-semibold'>
          <ul className='flex flex-col gap-2'>
            {listData.map((e, index) => (
              <li key={index} className='flex items-start text-xl'>
                <span className='text-[var(--main-page-color)] mr-1 text-base xl:text-2xl'>
                  <IoMdCheckmark />
                </span>
                <span className='text-sm xl:text-lg'>{e}</span>
              </li>
            ))}
          </ul>
          <div className=' w-full h-full mt-10'>
            <NavigateBtn
              link='/#signup'
              text='Zapisz się już dziś!'
              style='lg:w-1/2 left-1/2 relative -translate-x-1/2'
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default MoreInfo;
