'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = ['Overview', 'Structure', 'Surface'];
type ImageType = {
  url: string;
  spSize?: number;
  tabletSize?: number;
  pcSize?: number;
};

type Props = {
  images?: ImageType[];
  name: string;
  color?: string;
  descriptions: {
    overviewDescription: string;
    structureDescription: string;
    surfaceDescription: string;
  };
  wikiLink: string;
};

const ToggleCotnent = ({ images, name, color, descriptions, wikiLink }: Props) => {
  const [activeButton, setActiveButton] = useState('Overview');
  const handleButtonClick = (item: string) => setActiveButton(item);

  return (
    <>
      <div className='px-6 py-2 border-b-[1px] border-foreground/20 mb-6 md:border-b-0 md:self-center md:p-0 md:justify-self-end md:w-full lg:self-start md:mb-0 lg:row-start-2 lg:col-start-2'>
        <div className='max-w-[480px] mx-auto flex justify-between md:flex-col md:w-full md:gap-4 md:mx-0'>
          {navItems.map((item, index) => (
            <Button
              key={item}
              variant='ghost'
              className={`relative p-0 font-spartan uppercase font-bold tracking-[1.93px] text-[10px] ${activeButton === item ? 'text-foreground active-tab' : 'text-foreground/50'} md:border-foreground/20 md:border-[1px] md:pt-5 md:pb-[18px] md:text-[12px] md:w-full md:justify-start md:pl-5 md:before-content lg:hover:bg-[#d8d8d8]/20 lg:h-12`}
              style={
                {
                  ...(activeButton === item ? { '--hover-bg-color': color } : {}),
                  '--before-content': `'0${index + 1}'`,
                } as React.CSSProperties
              }
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      {images?.map((image, index) => {
        const imageUrl = index === 2 ? images[0].url : image.url;
        const spSize = index === 2 ? images[0].spSize : image.spSize;
        const tabletSize = index === 2 ? images[0].tabletSize : image.tabletSize;
        const pcSize = index === 2 ? images[0].pcSize : image.pcSize;

        return (
          <div
            key={index}
            className={`relative w-[256px] md:w-[422px] xl:w-[666px] h-[256px] md:h-[422px] xl:h-[666px] mx-auto place-items-center ${activeButton === navItems[index] ? 'grid' : 'hidden'} md:mb-10 lg:mb-0 md:row-start-1 md:col-span-2 lg:col-start-1 lg:row-end-3 lg:col-span-1`}
          >
            <div
              className='planet-size'
              style={
                {
                  '--sp-size': `${spSize}px`,
                  '--tab-size': `${tabletSize}px`,
                  '--pc-size': `${pcSize}px`,
                } as React.CSSProperties
              }
            >
              <Image src={imageUrl} fill alt={name} />
            </div>
            {index === 2 && (
              <Image
                className='absolute bottom-0 w-[100px] md:w-[130px] h-[125px] md:h-[162.5px] xl:w-[163px] xl:h-[199px] xl:bottom-5'
                src={images[2].url}
                width={163}
                height={199}
                alt=''
              />
            )}
          </div>
        );
      })}
      <div className='md:col-start-1 md:row-start-2 lg:row-start-1 lg:col-start-2 lg:self-end'>
        <h2 className='text-center text-[40px] mb-4 md:self-start md:text-left md:text-[48px] xl:text-[80px]'>
          {name.toUpperCase()}
        </h2>

        <p className='mx-6 mb-7 text-center font-spartan leading-loose font-light md:text-left md:mx-0'>
          {activeButton === 'Overview'
            ? descriptions.overviewDescription
            : activeButton === 'Structure'
              ? descriptions.structureDescription
              : descriptions.surfaceDescription}
        </p>
        <p className='flex items-center justify-center mb-7 font-spartan text-center text-foreground/50 font-normal md:justify-start md:mb-0 lg:mb-10'>
          Source&nbsp;:&nbsp;
          <Link
            className='font-semibold tracking-wider underline mr-1'
            href={wikiLink}
            target='_blank'
          >
            Wikipedia
          </Link>
          <Image src='/assets/icon-source.svg' alt='source' width={12} height={12} />
        </p>
      </div>
    </>
  );
};

export default ToggleCotnent;
