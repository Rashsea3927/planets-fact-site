import { spartan } from '@/app/layout';
import Link from 'next/link';
import Chevron from '@/public/assets/icon-chevron.svg';
import Image from 'next/image';
import { getPlanetName } from '@/sanity/sanity.query';
import { PlanetName } from '@/types';

// const planets = [
//   { name: 'mercury', color: 'bg-mercury' },
//   { name: 'venus', color: 'bg-venus' },
//   { name: 'earth', color: 'bg-earth' },
//   { name: 'mars', color: 'bg-mars' },
//   { name: 'jupiter', color: 'bg-jupiter' },
//   { name: 'saturn', color: 'bg-saturn' },
//   { name: 'uranus', color: 'bg-uranus' },
//   { name: 'neptune', color: 'bg-neptune' },
// ];

const Menu = async () => {
  const planetNames: PlanetName[] = await getPlanetName();
  return (
    <nav>
      <ul>
        {planetNames.map((planet, index) => {
          return (
            <li
              key={planet.name}
              className='[&:not(:last-child)]:border-b-[1px] border-foreground/20'
            >
              <Link
                className={`flex items-center justify-between pb-5 ${index !== 0 ? 'pt-5' : ''}`}
                href={`/${planet.name}`}
              >
                <div className='flex items-center gap-6'>
                  <span
                    className='w-5 h-5 rounded-full'
                    style={{ backgroundColor: planet.color.hex }}
                  />
                  <span
                    className={`uppercase font-bold text-[15px] tracking-[1.36px] ${spartan.variable}`}
                  >
                    {planet.name}
                  </span>
                </div>
                <Image className='w-1 h-2' src={Chevron} width={4} height={8} alt='' />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
