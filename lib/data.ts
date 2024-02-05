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
