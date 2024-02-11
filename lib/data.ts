import books from '@/public/images/three_books.png';
import smallCar from '@/public/images/small_car.png';
import trafficCone from '@/public/images/traffic_cone.png';
import Doctor_Male from '@/public/images/requirements/Doctor_Male.png';
import ID_Verified from '@/public/images/requirements/ID_Verified.png';
import Checked_Identification_Documents from '@/public/images/requirements/Checked_Identification_Documents.png';
import Signing_A_Document from '@/public/images/requirements/Signing_A_Document.png';
import User_Photo from '@/public/images/requirements/user_photo.png';
import star from '@/public/images/Star.png';
import trophy from '@/public/images/Trophy.png';
import licence from '@/public/images/Licence.png';

export const moreInfo = [
  { img: books, text: 'Materiały do nauki oraz testy GRATIS' },
  { img: smallCar, text: 'Dodatkowe jazdy doszkalające' },
  { img: trafficCone, text: 'Jazda na placu egzaminacyjnym WORD' },
] as const;

export const requirements = [
  { img: ID_Verified, text: 'Musisz mieć minimum 17 lat i 9 miesięcy' },
  {
    img: Signing_A_Document,
    text: 'Pisemna zgoda rodzica lub opiekuna, jeżeli nie ukończyłeś/łaś 18 lat',
  },
  {
    img: Doctor_Male,
    text: 'Badania lekarskie',
  },
  {
    img: User_Photo,
    text: 'Aktualna kolorowa fotografia o wymiarze 3,5 cm x 4,5 cm',
  },
  {
    img: Checked_Identification_Documents,
    text: 'Dowód osobisty, dowód tymczasowy lub paszport (dla potwierdzenia tożsamości)',
  },
] as const;

export const opinions = [
  { img: star, text: 'Opinia w Google', text_2: '4.9/5' },
  { img: trophy, text: 'Nasza pozycja ', text_2: '3/52' },
  { img: licence, text: 'Zdawalność za 1 razem', text_2: '80%' },
] as const;

export const dummyOpinions = [
  { img: star, text: 'Opinia w Google', text_2: '4.9/5' },
  { img: trophy, text: 'Nasza pozycja ', text_2: '3/52' },
  { img: licence, text: 'Zdawalność za 1 razem', text_2: '80%' },
] as const;
export const reviews = [
  {
    author_name: 'Laura Majda',
    author_url:
      'https://www.google.com/maps/contrib/116087803316080748900/reviews',
    language: 'pl',
    original_language: 'pl',
    profile_photo_url:
      'https://lh3.googleusercontent.com/a/ACg8ocKWH9nReZQXwWPZ4kGiZf01uUUT_uzBdHpaCkXFCP6e=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    text: 'Bardzo dobra szkoła nauki jazdy. Zarówno wykłady, jak i jazdy przebiegały w bardzo przyjaznej atmosferze. Instruktorzy dokładnie tłumaczyli błędy. Na plus jest możliwość wjechania na plac WORDu i dodatkowe godziny jazdy. Polecam',
    time: 1706863859,
    translated: false,
  },
  {
    author_name: 'Eliza Zakorczmenna',
    author_url:
      'https://www.google.com/maps/contrib/103700186552886283402/reviews',
    language: 'pl',
    original_language: 'pl',
    profile_photo_url:
      'https://lh3.googleusercontent.com/a/ACg8ocJDhvQsnfcNdesqrFzKJjgva9KKkR9YPQ6WjH_ISCjb=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    text: 'Polecam wszystkim. Dobra cena, sprawnie przeprowadzone wykłady ale przede wszystkim świetne podejście instruktorów do kursanta. Jazdy w profesjonalnej ale bardzo przyjemnej atmosferze, na które przychodziłam z przyjemnością.',
    time: 1706703750,
    translated: false,
  },
  {
    author_name: 'Monika Fidler',
    author_url:
      'https://www.google.com/maps/contrib/108898905235469434665/reviews',
    language: 'pl',
    original_language: 'pl',
    profile_photo_url:
      'https://lh3.googleusercontent.com/a/ACg8ocLYrXAGMbOOOBdSJgimuL9QI9Nf2KXzKrxRf2EvgSoa=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    text: 'Super szkoła, istruktorzy bardzo mili i cierpliwi, świetnie przygotowują do egzaminu. Na jazdach i wykładach panuje przyjemna atmosfera, wszystko jest świetnie dopracowane. Bardzo polecam',
    time: 1705965352,
    translated: false,
  },
  {
    author_name: 'Paweł Dziedzic',
    author_url:
      'https://www.google.com/maps/contrib/106285440565012889387/reviews',
    language: 'pl',
    original_language: 'pl',
    profile_photo_url:
      'https://lh3.googleusercontent.com/a-/ALV-UjW3aqE1GHgAUjIEcwKPWq1BWVTS2Z73zqn1Peb78U4dVrA=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    text: 'Najlepsza szkoła nauki jazdy w Rzeszowie, profesjonalne podejście do kursanta pod każdym aspektem, świetnie pokazane wszystkie cięższe miejsca, trasy egzaminacyjne oraz w bardzo przyjemny sposób wytłumaczone.\n\nEgzaminy ma WORD zdane za pierwszym podejściem.\nPolecam serdecznie z całego serca❤️',
    time: 1699379033,
    translated: false,
  },
  {
    author_name: 'Natalia',
    author_url:
      'https://www.google.com/maps/contrib/109425683364360051555/reviews',
    language: 'pl',
    original_language: 'pl',
    profile_photo_url:
      'https://lh3.googleusercontent.com/a-/ALV-UjXruZQDfqUikjGxicFzNEwdwHdgv3KB5sObJFxwo4SuXw=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    text: 'Zdecydowanie polecam!!! Instruktorzy profesjonalni i cierpliwi, a zajęcia praktyczne i teoretyczne doskonale przygotowują do egzaminu. Świetne podejście i bardzo przyjazna atmosfera na jazdach. Gdybym cofnęła się w czasie podjęłabym tą samą decyzję i znów wybrałabym właśnie Neocar :DDD',
    time: 1705592404,
    translated: false,
  },
] as const;

export const pricePlans = [
  {
    id: 'EKSTERNISTYCZNY',
    title: 'Kurs podstawowy kat. B',
    planTitle: 'EKSTERNISTYCZNY',
    price: '2590',

    characteristic: [
      '30 godzin jazd praktycznych',
      'zajęcia z ratownikiem medycznym',
      'jazda po placu egzaminacyjnym WORD',
      'wszelkie niezbędne materiały do nauki i dostęp do bazy pytań',
      'możliwość rozłożenia płatności na raty',
      'e-learning',
      'zajęcia praktyczne na NOWYM samochodzie Hyundai i20 (dokładnie taki sam jak w WORD Rzeszów) lub Fiat 500, który podstawiamy na egzamin',
    ],
  },
  {
    id: 'STANDARDOWY',
    title: 'Kurs podstawowy kat. B',
    planTitle: 'STANDARDOWY',
    price: '2590',

    characteristic: [
      '30 godzin jazd praktycznych',
      'zajęcia z ratownikiem medycznym',
      'jazda po placu egzaminacyjnym WORD',
      'wszelkie niezbędne materiały do nauki i dostęp do bazy pytań',
      'sprawnie przeprowadzone wykłady',
      'szybkie terminy jazd',
      'możliwość rozłożenia płatności na raty',
      'zajęcia praktyczne na NOWYM samochodzie Hyundai i20 (dokładnie taki sam jak w WORD Rzeszów) lub Fiat 500, który podstawiamy na egzamin',
    ],
  },
  {
    id: 'fast',
    title: 'Kurs podstawowy kat. B',
    planTitle: '2-3 TYGODNIE',
    price: '3290',

    characteristic: [
      '30 godzin jazd praktycznych',
      'zajęcia z ratownikiem medycznym',
      'jazda po placu egzaminacyjnym WORD',
      'wszelkie niezbędne materiały do nauki i dostęp do bazy pytań',
      'sprawnie przeprowadzone wykłady',
      'szybkie terminy jazd',
      'możliwość rozłożenia płatności na raty',
      'zajęcia praktyczne na NOWYM samochodzie Hyundai i20 (dokładnie taki sam jak w WORD Rzeszów) lub Fiat 500, który podstawiamy na egzamin',
    ],
  },
];
