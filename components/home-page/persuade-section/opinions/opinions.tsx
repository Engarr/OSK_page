'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { reviews } from '@/lib/data';
import { motion, useMotionValue } from 'framer-motion';
import fiveStars from '@/public/images/5stars.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { cn } from '@/lib/utils';

type ReviewCardType = {
  setWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
};
const DRAG_BUFFER = 30;
const PC_CARDS_TO_SCROLL = 2;
const TABLET_CARDS_TO_SCROLL = 1;
const MOBILE_CARDS_TO_SCROLL = 0;

const Opinions = () => {
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
    if (x <= -DRAG_BUFFER && cardIndex < reviews.length - 1 - cardsToScroll) {
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
  const onIncreaseReviws = () => {
    const cardsToScroll = getCardsToScroll();
    if (cardIndex < reviews.length - 1 - cardsToScroll) {
      setCardIndex((prev) => prev + 1);
    } else {
      return;
    }
  };
  const onDecreaseeReviws = () => {
    if (cardIndex > 0) {
      setCardIndex((prev) => prev - 1);
    } else {
      return;
    }
  };

  return (
    <>
      <motion.div
        className='relative  mt-10  w-full  justify-start items-center flex b'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
        <div
          className={cn(
            ' hidden lg:inline-block absolute left-[5%] xl:left-[10%] text-[40px] text-[var(--main-page-color)] cursor-pointer z-40 ',
            { 'cursor-auto text-[var(--main-page-color-40)]': cardIndex === 0 }
          )}
          onClick={onDecreaseeReviws}>
          <IoIosArrowBack />
        </div>
        <div className=' relative w-full lg:w-3/4 overflow-hidden left-1/2 -translate-x-1/2 flex'>
          <motion.div
            className='flex cursor-grab active:cursor-grabbing'
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
            <ReviewCard setWidth={setWidth} />
          </motion.div>
        </div>
        <div
          className={cn(
            `hidden lg:inline-block right-[5%] xl:right-[10%] absolute text-[40px] text-[var(--main-page-color)] cursor-pointer z-40`,
            {
              'cursor-auto text-[var(--main-page-color-40)]':
                cardIndex >= reviews.length - getCardsToScroll() - 1,
            }
          )}
          onClick={onIncreaseReviws}>
          <IoIosArrowForward />
        </div>
      </motion.div>
    </>
  );
};

export default Opinions;

const ReviewCard = ({ setWidth }: ReviewCardType) => {
  const reviewCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reviewCardRef.current) {
      setWidth(reviewCardRef.current.offsetWidth);
    }
  }, [setWidth]);

  return (
    <>
      {reviews.map((r, index) => {
        return (
          <div
            key={index}
            className={`aspect-video shrink-0 w-1/2 xl:w-1/3  py-4 rounded-md flex items-center lg:justify-start justify-center`}
            ref={reviewCardRef}>
            <div className='w-[90%] relative lg:left-1/2 lg:-translate-x-1/2 lg:h-[200px] h-[250px] bg-[var(--background-white-2)] px-2 py-4 rounded-md justify-center flex flex-col'>
              <div className='flex items-center gap-2 mb-2 '>
                <Image
                  src={r.profile_photo_url}
                  alt='zdjęcie użytkownika'
                  width={40}
                  height={40}
                />
                <div>
                  <p className='mb-1'>{r.author_name}</p>
                  <p className='flex gap-1 '>
                    <span className='text-xs'>{r.rating}/5</span>
                    <Image src={fiveStars} alt='' />
                  </p>
                </div>
              </div>
              <div className='text-xs p-2'>
                <p className='mb-1'>{r.text}</p>
                <a
                  href='https://www.google.com/search?sca_esv=e1cf12f9f09085f6&hl=pl&gl=PL&sxsrf=ACQVn08gJ6w0fgjPRW0l6IeGEAshVHkQYQ:1707232879198&q=neocar+opinie&uds=AMwkrPs-xwNlCptylbkNGKuEXSF74ptdfslb1nS7FjCSX08jSCGbhJbkayiRiq8ryGt5slyWPeEUVOsofiBnVed54f8RUGj8ySAkJYoxpqJnB5HN9Qv17vo9vpl0aNPov0i4L7pb7zMB9NCbp5hrx14drpQ-f_toUYdqpzBckaG8NW9xzsl0RLg&si=AKbGX_rcuucMgom2rba1cdwsvM2SVoIkP2btyqGMV4t0GuHIs4sGV_1tpuqR0YHG4Rzd9SdIuPYoXMFi13tIRJ_4YelZhn2WHj6uPjtAizJKTuRotPx_NxJjf_FDn9H0aJ6I_R3EMwMJHGbS7n_tqx35ogscYDRVEQ%3D%3D&sa=X&ved=2ahUKEwjGwcCKgpeEAxXQavEDHZ2QCyAQxKsJegQIChAB&ictx=1&biw=1920&bih=919&dpr=1'
                  className='text-[var(--main-page-color)] mt-2'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Więcej...
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
