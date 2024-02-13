import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Toast from '@/components/ui/toast';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Ośrodek Szkolenia Kierowców OSK NEOCAR',
  description:
    'Zapraszamy do zapoznania się z ofertą kursów nauki jazdy w Rzeszowie, oferowanych przez Ośrodek Szkolenia Kierowców NeoCar. Nasza szkoła jazdy cieszy się uznaniem przyszłych kierowców dzięki wysokiej jakości kursom, które przygotowują do bezpiecznego i pewnego poruszania się po drogach. Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszych kursach i rozpocząć swoją drogę do zdobycia prawa jazdy w profesjonalnej i przyjaznej atmosferze. Ośrodek Szkolenia Kierowców NeoCar w Rzeszowie to Twój pierwszy krok w kierunku niezależności na drodze.',
  keywords: [
    'nauka jazdy Rzeszów',
    'kursy prawa jazdy Rzeszów',
    'szkoła jazdy Rzeszów',
    'Ośrodek Szkolenia Kierowców Rzeszów',
    'NeoCar kursy nauki jazdy',
    'zdobądź prawo jazdy Rzeszów',
    'lekcje jazdy Rzeszów',
    'egzamin na prawo jazdy Rzeszów',
    'profesjonalna nauka jazdy Rzeszów',
    'najlepsza szkoła jazdy w Rzeszowie',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${poppins.className} `}>
        <Header />
        <Toast />
        {children}
        <Footer />
      </body>
    </html>
  );
}
