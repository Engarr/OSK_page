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

const Page = () => {
  const [fullscreenImageArr, setFullscreenImageArr] = useState<
    StaticImageData[] | null
  >(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const onClose = () => {
    setFullscreenImageArr(null);
    document.body.style.overflowY = 'auto';
  };

  return (
    <>
      <section className=' w-screen h-screen opacity-10 fixed top-0 left-0 '>
        <Image
          src={bg}
          alt='bg'
          fill
          loading='lazy'
          className='object-cover'
          quality={40}
        />
      </section>
      <div className='relative pt-[82px]'>
        <Wrapper style='left-1/2 -translate-x-1/2 p-0 flex-col '>
          <h2 className=' text-2xl lg:text-3xl mt-5 text-[var(--main-page-color)] font-bold'>
            Poznaj nas lepiej
          </h2>
          <PhotoSlider
            imagesPaths={carsGallery.imgArr}
            title={carsGallery.title}
            setFullscreenImageArr={setFullscreenImageArr}
            setImgIndex={setActiveImageIndex}
          />
          <PhotoSlider
            imagesPaths={officeGallery.imgArr}
            title={officeGallery.title}
            setFullscreenImageArr={setFullscreenImageArr}
            setImgIndex={setActiveImageIndex}
          />
          <PhotoSlider
            imagesPaths={maneuveringAreaGallery.imgArr}
            title={maneuveringAreaGallery.title}
            setFullscreenImageArr={setFullscreenImageArr}
            setImgIndex={setActiveImageIndex}
          />
        </Wrapper>
      </div>
      {fullscreenImageArr && (
        <div className='sticky top-0 left-0 bottom-0 right-0 w-screen h-screen bg-[var(--black-95)] flex justify-center items-center z-[100] '>
          <FullscreenImage
            onClose={onClose}
            imgIndex={activeImageIndex}
            imagesPaths={fullscreenImageArr}
            setImgIndex={setActiveImageIndex}
            setFullscreenImageArr={setFullscreenImageArr}
          />
        </div>
      )}
    </>
  );
};

export default Page;
