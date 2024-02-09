'use client';
import React from 'react';
import Wrapper from '../ui/wrapper';
import logo from '@/public/images/logo_PNG.png';
import Image from 'next/image';
import { useActiveFullScreen } from '@/context/active-full-screen-context';

const sectionOneData = [
  {
    title: 'Sala Wykładowa i Biuro',
    text: [
      'ul. Stefana Żeromskiego 6/4',
      '35-001 Rzeszów',
      '(blisko dworca PKP i PKS)',
    ],
  },
];
const sectionTwoData = [
  {
    title: 'Biuro',
    text: ['Godziny otwarcia:', 'Wtorek 9:30-13:30', 'Czwartek 12:30-17:30'],
  },
];
const sectionThreeData = [
  {
    title: 'Kontakt',
    text: [
      'E-mail: oskneocar@gmail.com',
      'Telefon:',
      '+48 500 468 122',
      '+48 604 114 790',
    ],
  },
];

const Footer = () => {
  const { isFullScreenActive } = useActiveFullScreen();

  return (
    <>
      {!isFullScreenActive && (
        <footer className='bg-[var(--black-95)] text-[var(--text-white-1)] py-4'>
          <Wrapper style='left-1/2 -translate-x-1/2 min-h-[250px]  '>
            <div className='w-3/4 flex justify-around items-center text-center lg:text-start flex-col xl:flex-row gap-4 lg:gap-1'>
              <div className=' max-w-[20rem] items-center xl:items-start flex flex-col mb-5 xl:mb-0'>
                <Image
                  src={logo}
                  alt='logo'
                  width={150}
                  sizes='100vh'
                  className='mb-2'
                />
                <p className='text-sm'>
                  OSK NEOCAR zajmuję się nauką jazdy, kursami na prawo jazdy
                  kat. B oraz jazdami doszkalającymi.
                </p>
              </div>

              <div className=' flex gap-2 flex-col md:flex-row justify-around w-full'>
                <div className=''>
                  {sectionOneData.map((section, index) => (
                    <Section key={index} data={section} />
                  ))}
                </div>
                <div className=' '>
                  {sectionTwoData.map((section, index) => (
                    <Section key={index} data={section} />
                  ))}
                </div>
                <div className=''>
                  {sectionThreeData.map((section, index) => (
                    <Section key={index} data={section} />
                  ))}
                </div>
              </div>
            </div>
          </Wrapper>
          <p className='text-center text-xs mt-2'>
            Strona wykonana przez firmę Modezp -
            <a
              href='https://www.modezp.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='pl-1 hover:text-[var(--main-page-color)] transition-colors text-blue-400'>
              www.modezp.com
            </a>
          </p>
        </footer>
      )}
    </>
  );
};

export default Footer;

type SectionType = {
  data: { title: string; text: string[] };
};

const Section = ({ data }: SectionType) => {
  return (
    <div className='flex-1'>
      <div className='text-base lg:text-lg mb-1 font-semibold'>
        <p>{data.title}</p>
      </div>
      <ul className=''>
        {data.text.map((item, i) => (
          <li key={i} className='text-xs lg:text-base'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
