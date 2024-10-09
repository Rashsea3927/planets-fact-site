// import type { Metadata } from 'next';
import { Antonio, League_Spartan } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Image from 'next/image';
import BackgroundImageStars from '@/public/assets/background-stars.svg';

const antonio = Antonio({
  weight: '500',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-antonio',
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
      <body className={`${antonio.variable} relative min-h-dvh antialiased bg-background`}>
        <Image
          src={BackgroundImageStars}
          className='object-cover -z-10'
          fill
          alt='background image'
        />
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
