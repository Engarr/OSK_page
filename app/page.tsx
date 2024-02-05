import Requirements from '@/components/requirements-section/requaiers';
import WelcomeSection from '@/components/welcome-section/welcome-section';

export default function Home() {
  return (
    <main className='h-[10000px]'>
      <WelcomeSection />
      <div className='relative'>
        <div className='w-full h-[32px]  bottom-0 gradient-background absolute ' />
      </div>
      <Requirements />
    </main>
  );
}
