import Requirements from '@/components/home-page/requirements-section/requaiers';
import WelcomeSection from '@/components/home-page/welcome-section/welcome-section';
import PersuadeSection from '@/components/home-page/persuade-section/persuade-section';
import SignUpSection from '@/components/home-page/sign-up-section/sign-up-section';

export default function Home() {
  return (
    <div className='mt-[83px] target' id='glowna'>
      <WelcomeSection />
      <div className='relative'>
        <div className='w-full h-[32px]  bottom-0 gradient-background absolute ' />
      </div>
      <Requirements />
      <PersuadeSection />
      <SignUpSection />
    </div>
  );
}
