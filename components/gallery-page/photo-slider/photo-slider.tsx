'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { HiMagnifyingGlassPlus } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { useActiveFullScreen } from '@/context/active-full-screen-context';
import ControlPanel from '../control-panel/control-panel';

type PhotoSliderType = {
  imagesPaths: StaticImageData[];
  title: string;
  setFullscreenImageArr: React.Dispatch<
    React.SetStateAction<StaticImageData[] | null>
  >;
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
};
const DRAG_BUFFER = 30;
const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 300,
  damping: 50,
};

const PhotoSlider = ({
  imagesPaths,
  title,
  setImgIndex,
  imgIndex,
  setFullscreenImageArr,
}: PhotoSliderType) => {
  const [dragging, setDragging] = useState(false);
  const { setIsFullScreenActive } = useActiveFullScreen();

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imagesPaths.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };
  const OnClickSetFullScreenImagesArr = (imagesArr: StaticImageData[]) => {
    setFullscreenImageArr(imagesArr);
    setIsFullScreenActive(true);
  };

  return (
    <>
      <div className=' relative  overflow-hidden xl:py-5 w-full xl:w-3/4  bg-[var(--background-white-2)] p-2  mb-5 mt-10'>
        <h2 className='text-center text-2xl font-semibold text-[var(--main-page-color)] py-2'>
          {title}
        </h2>
        <motion.div
          className='flex items-center cursor-grab active:cursor-grabbing h-[300px]  lg:h-[500px] '
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          animate={{ translateX: `-${imgIndex * 100}%` }}
          transition={SPRING_OPTIONS}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}>
          <Images
            imagesPaths={imagesPaths}
            imgIndex={imgIndex}
            OnClickSetFullScreenImagesArr={OnClickSetFullScreenImagesArr}
          />
        </motion.div>
        <Dots
          imgIndex={imgIndex}
          setImgIndex={setImgIndex}
          imagesPaths={imagesPaths}
        />
      </div>
    </>
  );
};

export default PhotoSlider;

type ImagesPathsType = {
  imagesPaths: StaticImageData[];
  imgIndex: number;
  OnClickSetFullScreenImagesArr: (imagesArr: StaticImageData[]) => void;
};

const Images = ({
  imagesPaths,
  imgIndex,
  OnClickSetFullScreenImagesArr,
}: ImagesPathsType) => {
  return (
    <>
      {imagesPaths.map((image, idx) => {
        return (
          <motion.div
            key={idx}
            className='aspect-auto relative shrink-0 w-[100%] h-[100%] group'
            animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}>
            <div
              className='absolute left-[90%] md:left-[80%] top-[2%] text-2xl  lg:opacity-0 group-hover:opacity-100 transition-all z-[100] p-1 cursor-pointer text-[var(--main-page-color)] hover:scale-[1.2] bg-white rounded-full shadow-xl '
              onClick={() => OnClickSetFullScreenImagesArr(imagesPaths)}>
              <HiMagnifyingGlassPlus />
            </div>
            <div className='z-[50] h-[100%] w-[100%] absolute  bg-black opacity-0'></div>

            <Image
              src={image.src}
              alt='zdjęcie galerii'
              quality={100}
              fill
              sizes='100vh'
              className='object-contain z-0  '
              loading='lazy'
            />
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
  imagesPaths,
}: {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
  imagesPaths: StaticImageData[];
}) => {
  return (
    <div className='flex mt-4 w-full justify-center gap-2  overflow-hidden '>
      {imagesPaths.map((i, index) => {
        return (
          <button
            key={index}
            onClick={() => setImgIndex(index)}
            className={cn(
              'max-h-[50px] xl:max-h-[100px]  max-w-[50px] xl:max-w-[100px] overflow-hidden  border-2 assp relative',
              {
                'border-[var(--main-page-color)] ': imgIndex === index,
              }
            )}>
            <Image
              src={i}
              alt='zdjecie'
              width={100}
              height={100}
              quality={10}
              className={cn('object-left-top')}
            />
          </button>
        );
      })}
    </div>
  );
};
