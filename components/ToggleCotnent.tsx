'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

const navItems = ['Overview', 'Structure', 'Surface'];

type Props = {
  images?:
    | {
        url: string;
        spSize: number;
        tabletSize: number;
        pcSize: number;
      }[]
    | { url: string }[];
  name: string;
  color?: string;
  descriptions: {
    overviewDescription: string;
    structureDescription: string;
    surfaceDescription: string;
  };
};

const ToggleCotnent = ({ images, name, color, descriptions }: Props) => {
  const [activeButton, setActiveButton] = useState('Overview');
  const handleButtonClick = (item: string) => setActiveButton(item);

  return (
    <>
      <div className='flex justify-between order-1 px-6 py-2 border-b-[1px] border-foreground/20 mb-6'>
        {navItems.map((item) => (
          <Button
            key={item}
            variant='ghost'
            className={`relative p-0 font-spartan uppercase font-bold tracking-[1.93px] text-[10px] ${activeButton === item ? 'text-foreground mobile-nav-item-border' : 'text-foreground/50'}`}
            style={
              activeButton === item ? ({ '--hover-bg-color': color } as React.CSSProperties) : {}
            }
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      {images?.map((image, index) => {
        const imageUrl = index === 2 ? images[0].url : image.url;
        const spSize = `${image.spSize}`;
        const tabletSize = image.tabletSize;
        const pcSize = image.pcSize;

        if (index === 2) {
          return (
            <div
              key={index}
              className={`relative order-2 w-[256px] h-[256px] mx-auto place-items-center ${activeButton === navItems[index] ? 'grid' : 'hidden'}`}
            >
              <div
                className='planet-size'
                style={
                  {
                    '--sp-size': `${images[0].spSize}px`,
                    '--tab-size': `${images[0].tabletSize}px`,
                    '--pc-size': `${images[0].pcSize}px`,
                  } as React.CSSProperties
                }
              >
                <Image src={imageUrl} fill alt={name} />
              </div>
              <Image
                className='absolute bottom-0 w-[100px] h-[125px]'
                src={images[2].url}
                width={163}
                height={199}
                alt=''
              />
            </div>
          );
        }
        return (
          <div
            key={index}
            className={`relative order-2 w-[256px] h-[256px] mx-auto place-items-center ${activeButton === navItems[index] ? 'grid' : 'hidden'}`}
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
          </div>
        );
      })}
      <p className='mx-6 mb-7 order-4 text-center font-spartan leading-loose font-light'>
        {activeButton === 'Overview'
          ? descriptions.overviewDescription
          : activeButton === 'Structure'
            ? descriptions.structureDescription
            : descriptions.surfaceDescription}
      </p>
    </>
  );
};

export default ToggleCotnent;
