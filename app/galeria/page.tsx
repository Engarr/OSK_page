'use client';
import Wrapper from '@/components/ui/wrapper';
import {
  carsGallery,
  officeGallery,
  maneuveringAreaGallery,
} from '@/lib/gallery-images';
import React, { useState } from 'react';
import PhotoSlider from '@/components/gallery-page/photo-slider/photo-slider';
import Image, { StaticImageData } from 'next/image';
import bg from '@/public/images/image_50414849.jpg';
import FullscreenImage from '@/components/gallery-page/full-screen/full-screen';
import { useActiveFullScreen } from '@/context/active-full-screen-context';

const Page = () => {
  const { isFullScreenActive, setIsFullScreenActive } = useActiveFullScreen();
  const [fullscreenImageArr, setFullscreenImageArr] = useState<
    StaticImageData[] | null
  >(null);
  const [imgIndex, setImgIndex] = useState(0);
  const onClose = () => {
    setIsFullScreenActive(false);
    setFullscreenImageArr(null);
    document.body.classList.remove('overflow-hidden');
  };
  return (
    <>
      <div className=' w-screen h-screen opacity-10 fixed top-0 left-0 '>
        <Image
          src={bg}
          alt='bg'
          fill
          loading='lazy'
          className='object-cover'
          quality={40}
        />
      </div>
      <div className='relative '>
        <Wrapper style='left-1/2 -translate-x-1/2 p-0 flex-col '>
          <PhotoSlider
            imagesPaths={carsGallery.imgArr}
            title={carsGallery.title}
            setFullscreenImageArr={setFullscreenImageArr}
            setImgIndex={setImgIndex}
            imgIndex={imgIndex}
          />
          <PhotoSlider
            imagesPaths={officeGallery.imgArr}
            title={officeGallery.title}
            setFullscreenImageArr={setFullscreenImageArr}
            setImgIndex={setImgIndex}
            imgIndex={imgIndex}
          />
          <PhotoSlider
            imagesPaths={maneuveringAreaGallery.imgArr}
            title={maneuveringAreaGallery.title}
            setFullscreenImageArr={setFullscreenImageArr}
            setImgIndex={setImgIndex}
            imgIndex={imgIndex}
          />
        </Wrapper>
      </div>
      {isFullScreenActive && fullscreenImageArr && (
        <div className='sticky top-0 left-0 bottom-0 right-0 w-screen h-screen bg-[var(--black-95)] flex justify-center items-center z-[100] '>
          <FullscreenImage
            onClose={onClose}
            imgIndex={imgIndex}
            imagesPaths={fullscreenImageArr}
            setImgIndex={setImgIndex}
          />
        </div>
      )}
    </>
  );
};

export default Page;
