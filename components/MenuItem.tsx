import Link from 'next/link';
import Chevron from '@/public/assets/icon-chevron.svg';
import Image from 'next/image';
import { PlanetName } from '@/types';

const MenuItem = ({ planet, index }: { planet: PlanetName; index: number }) => {
  return (
    <Link
      className={`flex items-center justify-between max-sm:pb-5 ${index !== 0 ? 'max-sm:pt-5' : ''}`}
      href={`/${planet.name.toLowerCase()}`}
    >
      <div className='flex items-center gap-6'>
        <span
          className='w-5 h-5 rounded-full sm:hidden'
          style={{ backgroundColor: planet.color.hex }}
        />
        <span
          className={`font-spartan uppercase font-bold text-[15px] sm:text-[14px] tracking-[1.36px] sm:tracking-[1px] sm:text-white/75 hover:text-white lg:relative lg:nav-item-border`}
          style={
            {
              '--hover-bg-color': planet.color.hex,
            } as React.CSSProperties
          }
        >
          {planet.name}
        </span>
      </div>
      <Image className='w-1 h-2 sm:hidden' src={Chevron} width={4} height={8} alt='' />
    </Link>
  );
};

export default MenuItem;
