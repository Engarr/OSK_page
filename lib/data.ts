import books from '@/public/images/three_books.png';
import smallCar from '@/public/images/small_car.png';
import trafficCone from '@/public/images/traffic_cone.png';

export const navLinks = [
  { name: 'OSKNEOCAR', adress: '/' },
  { name: 'Cennik', adress: '/cennik' },
  { name: 'Galeria', adress: '/galeria' },
  { name: 'Kontakt', adress: '/#kontakt' },
] as const;

export const moreInfo = [
  { img: books, text: 'Materiały do nauki oraz testy GRATIS' },
  { img: smallCar, text: 'Dodatkowe jazdy doszkalające' },
  { img: trafficCone, text: 'Jazda na placu egzaminacyjnym WORD' },
] as const;
