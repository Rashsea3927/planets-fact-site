// import type { Metadata } from 'next';
import { Antonio, League_Spartan } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Image from 'next/image';
import BackgroundImageStars from '@/public/assets/background-stars.svg';

export const antonio = Antonio({
  weight: '500',
  display: 'swap',
  subsets: ['latin'],
});

export const spartan = League_Spartan({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-spartan',
});

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={`${antonio.className} relative min-h-dvh antialiased bg-background`}>
        <Image
          src={BackgroundImageStars}
          className='object-cover -z-10'
          fill
          alt='background image'
        />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
