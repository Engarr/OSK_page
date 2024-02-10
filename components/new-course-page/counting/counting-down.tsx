'use client';
import React, { useState, useEffect } from 'react';

type TimeLeft = {
  dni: number;
  godzin: number;
  minut: number;
  sekund: number;
};

const Countdown = (): JSX.Element => {
  const newCourseDate = '2024-02-14T16:00:00';
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
      <div>
        <span>Kurs rozpoczął się!</span>
      </div>
    );
  }

  return (
    <div className='flex flex-col text-center lg:text-start  items-center gap-5 lg:gap-10 mt-[100px]'>
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
    </div>
  );
};

export default Countdown;
