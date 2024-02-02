import React from 'react';
import logo from '@/public/images/logo_PNG.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='lg:w-[187px] lg:h-[62px] w-[120px] h-[62px] flexCenter'>
      <Link href='/glowna'>
        <Image src={logo} alt='neocar_logo' priority />
      </Link>
    </div>
  );
};

export default Logo;
