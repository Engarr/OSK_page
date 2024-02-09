import React, { Suspense } from 'react';
import WhyUs from './why-us/why-us';
import Achievements from './achievements/achievements';
import RankingPage from './ranking-page/ranking-page';
import Wrapper from '../../ui/wrapper';

const Video = React.lazy(() => import('./video/video'));
const Opinions = React.lazy(() => import('./opinions/opinions'));

const PersuadeSection = () => {
  return (
    <section className='relative overflow-hidden pb-10 '>
      <Wrapper style='flex-col left-1/2 -translate-x-1/2  '>
        <Suspense fallback={<div>Pobieranie danych...</div>}>
          <div className='relative py-5 flex items-start justify-center gap-4 flex-col lg:flex-row lg:mb-10'>
            <WhyUs />
            <Video />
          </div>
        </Suspense>
        <Achievements />
        <Suspense fallback={<div>Pobieranie danych...</div>}>
          <Opinions />
        </Suspense>
        <RankingPage />
      </Wrapper>
    </section>
  );
};

export default PersuadeSection;
