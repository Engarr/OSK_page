import { Suspense } from 'react';
import Requirements from '@/components/home-page/requirements-section/requaiers';
import WelcomeSection from '@/components/home-page/welcome-section/welcome-section';
import PersuadeSection from '@/components/home-page/persuade-section/persuade-section';
import SignUpSection from '@/components/home-page/sign-up-section/sign-up-section';
import Map from '@/components/contact-page/map/map';

export default function Home() {
  return (
    <main>
      <WelcomeSection />
      <div className='relative'>
        <div className='w-full h-[32px]  bottom-0 gradient-background absolute ' />
      </div>
      <Requirements />
      <PersuadeSection />
      <SignUpSection />
      <Suspense
        fallback={
          <div className='relative bottom-0 w-full h-[200px] lg:h-[400px] lg:px-5 lg:mt-20' />
        }>
        <div className='relative bottom-0 w-full h-[350px] lg:h-[400px]    overflow-hidden text-center '>
          <Map />
        </div>
      </Suspense>
    </main>
  );
}
