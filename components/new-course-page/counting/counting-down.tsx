'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { DataState } from '@/lib/acf-type';
import { motion } from 'framer-motion';

type TimeLeft = {
  dni: number;
  godzin: number;
  minut: number;
  sekund: number;
};

const Countdown = (): JSX.Element => {
  const [data, setData] = useState<DataState>({
    pageData: [],
    loading: true,
  });

  useMemo(async () => {
    const response = await fetch(
      'https://osk-neocar.pl/wp/wp-json/wp/v2/info?acf_format=standard&_fields=id,title,acf'
    );
    const pageData = await response.json();
    setData({ pageData, loading: false });
  }, []);

  const newCourseDate = data.loading
    ? ''
    : data &&
      data.pageData[0]?.acf &&
      data.pageData[0].acf.termin_nastepnego_kursu;

  const courseDateTime = new Date(newCourseDate);
  const formattedDate = courseDateTime.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  const formattedTime = courseDateTime.toLocaleTimeString('pl-PL', {
    hour: 'numeric',
    minute: 'numeric',
  });
  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +new Date(newCourseDate) - +new Date();
    if (difference <= 0) return null;

    let timeLeft: TimeLeft = {
      dni: Math.floor(difference / (1000 * 60 * 60 * 24)),
      godzin: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minut: Math.floor((difference / 1000 / 60) % 60),
      sekund: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };

  const formatTimeValue = (value: number): string => {
    return value <= 0 ? '00' : value < 10 ? `0${value}` : `${value}`;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!timeLeft) {
    return (
      <motion.div
        className='mt-10 text-3xl text-[var(--main-page-color)] font-bold my-7 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <p className='flexCenter flex-col gap-4'>
          Kurs rozpoczął się!{' '}
          <span className='text-[var(--text-color-2)] text-base lg:text-xl'>
            dnia {formattedDate} r. o godz. {formattedTime}
          </span>
        </p>
      </motion.div>
    );
  }

  return (
    <>
      {data.loading ? (
        <div className='flex flex-col text-center lg:text-start  items-center gap-5 lg:gap-10 my-[50px] lg:my-[70px] min-h-[200px] justify-center'>
          <p className='text-lg lg:text-xl font-semibold'>
            Pobieram informacje o najnowszym kursie...
          </p>
        </div>
      ) : (
        <motion.div
          className='flex flex-col text-center lg:text-start  items-center gap-5 lg:gap-10 mt-[100px]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          <div className='flexCenter flex-col'>
            <h1 className='lg:text-xl font-semibold text-[var(--main-page-color)]'>
              Termin rozpoczęcia nowego kursu:
            </h1>
            <h2 className=' text-base lg:text-xl font-semibold text-[var(--text-color-2)]'>
              {formattedDate} r. godz. {formattedTime}
            </h2>
          </div>
          <div>
            <h2 className=' text-base lg:text-2xl font-semibold text-[var(--main-page-color)] mb-3 lg:mb-2'>
              Do rozpoczęcia nowego kursu pozostało:
            </h2>
            <div className='bg-[var(--main-page-color)] text-[var(--text-white-1)] text-center flex justify-around p-2 shadow-xl rounded-md w-full'>
              {Object.keys(timeLeft).map((interval, index, array) => {
                const formattedValue = formatTimeValue(
                  timeLeft[interval as keyof TimeLeft]
                );
                return (
                  <div
                    className='p-2 flex items-center flex-col justify-center'
                    key={interval}>
                    <p className='font-bold text-xl'>
                      {formattedValue} {index !== array.length - 1 ? ':' : ''}
                    </p>
                    <span>{interval} </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Countdown;
