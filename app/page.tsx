import Requirements from '@/components/requirements-section/requaiers';
import WelcomeSection from '@/components/welcome-section/welcome-section';
import PersuadeSection from '@/components/persuade-section/persuade-section';
import SignUpSection from '@/components/sign-up-section/sign-up-section';

export default function Home() {
  return (
    <main className=''>
      <WelcomeSection />
      <div className='relative'>
        <div className='w-full h-[32px]  bottom-0 gradient-background absolute ' />
      </div>
      <Requirements />
      <PersuadeSection />
      <SignUpSection />
    </main>
  );
}
