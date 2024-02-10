'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

type CarouselDataType = {
  imgArr: StaticImageData[];
};

const DRAG_BUFFER = 30;
const PC_CARDS_TO_SCROLL = 2;
const TABLET_CARDS_TO_SCROLL = 1;
const MOBILE_CARDS_TO_SCROLL = 0;

const Carousel = ({ imgArr }: CarouselDataType) => {
  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState<number | undefined>(0);
  const [cardIndex, setCardIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);
    const cardsToScroll = getCardsToScroll();
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && cardIndex < imgArr.length - 1 - cardsToScroll) {
      setCardIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && cardIndex > 0) {
      setCardIndex((prev) => prev - 1);
    }
  };
  const getCardsToScroll = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        return PC_CARDS_TO_SCROLL;
      } else if (screenWidth >= 768) {
        return TABLET_CARDS_TO_SCROLL;
      } else {
        return MOBILE_CARDS_TO_SCROLL;
      }
    }
    return 1;
  };

  return (
    <>
      <motion.div
        className=' flex items-center cursor-grab active:cursor-grabbing'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
        <div className=''>
          <motion.div
            className='flex cursor-grab active:cursor-grabbing '
            drag='x'
            animate={
              width !== undefined
                ? { translateX: `-${cardIndex * width}px` }
                : {}
            }
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            style={{ x: dragX }}>
            <ImageCard setWidth={setWidth} imgArr={imgArr} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Carousel;
type ImageCardType = {
  setWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
  imgArr: StaticImageData[];
};
const ImageCard = ({ setWidth, imgArr }: ImageCardType) => {
  const reviewCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reviewCardRef.current) {
      setWidth(reviewCardRef.current.offsetWidth);
    }
  }, [setWidth]);

  return (
    <>
      {imgArr.map((r, index) => {
        return (
          <div
            key={index}
            className='w-[600px] h-[400px] relative aspect-video'
            ref={reviewCardRef}>
            <Image
              src={r}
              alt='zdjęcie galerii'
              fill
              sizes='100vh'
              className='object-cover bg-center'
            />
          </div>
        );
      })}
    </>
  );
};
