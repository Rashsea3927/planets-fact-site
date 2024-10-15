import { Button } from '@/components/ui/button';
import { getPlanets } from '@/sanity/sanity.query';
import { PlanetWithImage } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const HomePage = async () => {
  const planets: PlanetWithImage[] = await getPlanets();
  return (
    <div className='py-11 lg:py-14'>
      <ul className='grid gap-12 justify-center max-sm:px-6 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-[608px] lg:max-w-[1110px] sm:mx-auto'>
        {planets.map((planet) => (
          <li className='grid justify-center gap-5' key={planet._id}>
            <h2 className='text-center text-2xl uppercase tracking-wide'>{planet.name}</h2>
            <div>
              <Image
                className='w-[180px] h-auto'
                src={planet.imageUrl}
                alt={planet.name}
                width={0}
                height={0}
              />
            </div>
            <Button
              className='uppercase text-lg tracking-widest h-12 border-2 bg-gradient-to-r from-50% from-white to-50% bg-right bg-200 transition-all duration-500 ease-out border-white hover:bg-left hover:text-background'
              asChild
            >
              <Link href={`/${planet.name.toLowerCase()}`}>See Details</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
