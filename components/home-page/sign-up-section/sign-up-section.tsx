import React from 'react';
import Wrapper from '../../ui/wrapper';
import ContactForm from './contact-form/contact-form';
import Offer from './offer/offer';
import NavigateBtn from '../../ui/navigate-btn';
import Image from 'next/image';
import signupBackgroundImg from '@/public/images/408908176_18004249550233455_9060350178127088714_n 1.jpg';
import signupBackgroundImgMobile from '@/public/images/408908176_18004249550233455_9060350178127088714_n 1_mobile.jpg';

const SignUpSection = () => {
  return (
    <section id='signup' className='relative pb-10'>
      <Image
        src={signupBackgroundImg}
        alt=''
        fill
        sizes='100vh'
        className='relative object-fill opacity-10  hidden lg:inline-block'
      />
      <Image
        src={signupBackgroundImgMobile}
        alt=''
        fill
        sizes='100vh'
        className='absolute  opacity-20 inline-block lg:hidden'
      />
      <Wrapper style='left-1/2 -translate-x-1/2'>
        <div className='flexCenter flex-col mt-[20px] w-full px-2 lg:p-0'>
          <div>
            <h3 className='text-[var(--main-page-color)]  font-bold mb-0 lg:mb-2 text-base md:text-xl xl:text-3xl'>
              Zapisz się teraz
            </h3>
          </div>
          <div className='flex justify-center items-center lg:items-start w-full lg:gap-10 gap-2 mt-[20px] lg:flex-row flex-col mb-10'>
            <ContactForm />
            <Offer />
          </div>
          <NavigateBtn
            link='/nowy-kurs'
            text='Poznaj najbliższy termin kursu'
            style='px-4 py-2 text-xs lg:text-lg bg-transparent text-[var(--main-page-color)] border-solid border-2 border-[var(--main-page-color)] bg-[var(--background-white-2)]'
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default SignUpSection;
