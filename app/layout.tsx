import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import ContextProvider from '@/context/context-provider';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Ośrodek Szkolenia Kierowców OSK NEOCAR',
  description:
    'Zapoznaj się z ofertą szkoleń w Ośrodku Szkolenia Kierowców NeoCar. Oferujemy wysokiej jakości kursy dla przyszłych kierowców. Skontaktuj się z nami już dziś!',
  keywords: [
    'Ośrodek Szkolenia Kierowców',
    'NeoCar',
    'kursy prawa jazdy',
    'szkolenia kierowców',
    'doskonalenie techniki jazdy',
    'bezpieczna jazda',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth '>
      <body className={`${poppins.className} overflow-x-hidden`}>
        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
