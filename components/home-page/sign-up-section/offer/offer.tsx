import React from 'react';

const offerData = [
  'Kursy tradycyjne (forma spotkań)',
  'Skuteczne i bezstresowe nauczanie',
  'Multimedialne wykłady',
  'Książka + testy do nauki GRATIS',
  'Możliwość płatności w ratach',
  'Możliwość zapisu 3 miesiące przed 18-stką',
  'Dodatkowe jazdy doszkalające',
];

const Offer = () => {
  return (
    <div>
      <p className='mb-2 font-semibold text-[var(--main-page-color)] text-base md:text-xl xl:text-3xl'>
        Co obejmuje oferta OSK NEOCAR?
      </p>
      <ul className=''>
        {offerData.map((o, index) => (
          <li
            key={index}
            className='flex items-center mb-1 text-xs md:text-sm xl:text-base'>
            <span className='w-[10px] h-[10px] bg-[var(--main-page-color)] rounded-full flexCenter' />
            <span className='ml-2'>{o}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offer;
