import React from 'react';

const infoData = [
  {
    title: 'Usługi dodatkowe: godzina jazdy',
    details: [
      { normal: 'Dla naszych kursantów:', bold: '90 zł' },
      { normal: 'Dla pozostałych osób:', bold: '100 zł' },
      {
        normal: 'Dwie godziny jazdy w tym wjazd na plac egzaminacyjny WORD:',
        bold: '230 zł',
      },
    ],
  },
  {
    title: 'Dane do przelewu',
    details: [
      { normal: 'Ośrodek Szkolenia Kierowców NEOCAR', bold: 'NEOCAR' },
      { normal: 'Numer konta:', bold: '25 1050 1562 1000 0097 7895 4512' },
      {
        normal: 'Tytuł przelewu:',
        bold: 'Imię i Nazwisko Prawo jazdy kat. B',
      },
    ],
  },
];

const Details = () => {
  return (
    <div className='flex flex-col bg-[var(--white-50)] py-5 px-2 w-full xl:w-[90%] rounded-md mt-1 xl:mt-[2rem]'>
      <div className=' text-sm sm:text-base lg:text-lg xl:text-2xl flex items-center justify-center flex-col gap-2 mb-2 xl:mb-10 '>
        <p className='font-bold text-center lg:text-start'>
          !!! Promocja dla wszystkich uczniów - dodatkowe 2 godziny jazdy gratis
          !!!
        </p>
        <div className='h-[2px] w-[60%] bg-[var(--main-page-color-40)]' />
      </div>
      <div className='flex justify-around gap-1 md:gap-5 xl:gap-10 flex-col lg:flex-row '>
        {infoData.map((item, index) => (
          <div key={index} className='flex flex-col gap-1 xl:gap-5'>
            <h3 className='text-base xl:text-2xl text-[var(--main-page-color)] font-bold '>
              {item.title}
            </h3>
            <ul>
              {item.details.map((detail, idx) => (
                <li
                  key={idx}
                  className='text-xs md:text-base xl:text-lg text-left '>
                  <p>
                    {detail.normal}
                    <span className='font-bold pl-1'>{detail.bold}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
