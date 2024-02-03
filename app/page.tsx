import NextStepSection from '@/components/next-step-section/next-step-section';
import WelcomeSection from '@/components/welcome-section/welcome-section';

export default function Home() {
  return (
    <main className=''>
      <WelcomeSection />
      <div className='relative'>
        <div className='w-full h-[32px]  bottom-0 gradient-background absolute ' />
      </div>
      <NextStepSection />
      <div className='z-[20] relative'>sads</div>
    </main>
  );
}
