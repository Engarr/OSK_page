'use client';
import { DataState } from '@/lib/acf-type';
import React, { useMemo, useState } from 'react';

const Details = () => {
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

  const extraHourStudentPrice = data.loading
    ? 'Ładowanie...'
    : data &&
      data.pageData[0]?.acf &&
      data.pageData[0].acf.cena_za_jazdy_dodatkowe_kursantow.toString() + ' zł';
  const extraHourPrice = data.loading
    ? 'Ładowanie...'
    : data &&
      data.pageData[0]?.acf &&
      data.pageData[0].acf.cena_zajazdy_dodatkowe_pozostali.toString() + ' zł';
  const examinationSiteWORD = data.loading
    ? 'Ładowanie...'
    : data &&
      data.pageData[0]?.acf &&
      data.pageData[0].acf.dwie_godziny_na_placu_egzaminacyjnym.toString() +
        ' zł';

  return (
    <div className='flex flex-col bg-[var(--white-50)] py-5 px-2 w-full xl:w-[90%] rounded-md mt-5 xl:mt-[2rem]'>
      <div className=' text-sm sm:text-base lg:text-lg xl:text-2xl flex items-center justify-center flex-col gap-2 mb-2 xl:mb-10 '>
        <h3 className='font-bold text-center lg:text-start'>
          !!! Promocja dla wszystkich uczniów - dodatkowe 2 godziny jazdy gratis
          !!!
        </h3>
        <div className='h-[2px] w-[60%] bg-[var(--main-page-color-40)]' />
      </div>
      <div className='flex justify-around gap-1 md:gap-5 xl:gap-10 flex-col lg:flex-row '>
        <div className='flex flex-col gap-1 xl:gap-5'>
          <h4 className='text-base xl:text-2xl text-[var(--main-page-color)] font-bold '>
            Usługi dodatkowe: godzina jazdy
          </h4>
          <ul>
            <li className='text-xs md:text-base xl:text-lg text-left '>
              <p>
                Dla naszych kursantów:
                <span className='font-bold pl-1'>{extraHourStudentPrice}</span>
              </p>
            </li>
            <li className='text-xs md:text-base xl:text-lg text-left '>
              <p>
                Dla pozostałych osób:
                <span className='font-bold pl-1'>{extraHourPrice}</span>
              </p>
            </li>
            <li className='text-xs md:text-base xl:text-lg text-left '>
              <p>
                Dwie godziny jazdy w tym wjazd na plac egzaminacyjny WORD:
                <span className='font-bold pl-1'>{examinationSiteWORD}</span>
              </p>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-1 xl:gap-5'>
          <h4 className='text-base xl:text-2xl text-[var(--main-page-color)] font-bold '>
            Dane do przelewu
          </h4>
          <ul className=''>
            <li className='text-xs md:text-base xl:text-lg text-left '>
              <p>
                Ośrodek Szkolenia Kierowców
                <span className='font-bold pl-1'>NEOCAR</span>
              </p>
            </li>
            <li className='text-xs md:text-base xl:text-lg text-left '>
              <p>
                Numer konta:
                <span className='font-bold pl-1'>
                  25 1050 1562 1000 0097 7895 4512
                </span>
              </p>
            </li>
            <li className='text-xs md:text-base xl:text-lg text-left '>
              <p>
                Tytuł przelewu:
                <span className='font-bold pl-1'>
                  Imię i Nazwisko Prawo jazdy kat. B
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
