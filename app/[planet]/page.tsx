import { Button } from '@/components/ui/button';
import { getPlanetDetail } from '@/sanity/sanity.query';
import { PlanetDetail } from '@/types';
import Image from 'next/image';

type Props = {
  params: {
    planet: string;
  };
};

const PlanetDetailPage = async ({ params }: Props) => {
  const slug = params.planet;
  const planet: PlanetDetail = await getPlanetDetail(slug);
  return (
    <div>
      <div className='flex justify-between px-6 py-4 border-b-[1px] border-foreground/20 mb-6'>
        <Button
          variant='ghost'
          className='p-0 font-spartan uppercase font-bold tracking-[1.93px] text-xs text-foreground'
        >
          Overview
        </Button>
        <Button
          variant='ghost'
          className='p-0 font-spartan uppercase font-bold tracking-[1.93px] text-xs text-foreground/50'
        >
          Structure
        </Button>
        <Button
          variant='ghost'
          className='p-0 font-spartan uppercase font-bold tracking-[1.93px] text-xs text-foreground/50'
        >
          Surface
        </Button>
      </div>
      <div className='w-[256px] h-[256px] grid place-items-center mx-auto mb-6'>
        <Image
          className='w-2/5 h-auto'
          src={planet.images[0].url}
          width={0}
          height={0}
          alt={planet.name}
        />
      </div>
      <h2 className='text-center text-[40px] mb-4'>{planet.name.toUpperCase()}</h2>
      <p className='mx-6 mb-7 text-center font-spartan leading-loose font-light'>
        {planet.description}
      </p>
      <ul className='flex flex-col gap-2 mx-6 mb-12'>
        <li className='flex justify-between items-center px-6 py-3 border-solid border-[1px] border-foreground/20'>
          <h3 className='font-spartan font-medium text-sm uppercase text-foreground/50 tracking-[0.73px]'>
            rotation time
          </h3>
          <span className='text-xl uppercase'>
            {planet.rotationTime.toLocaleString()} {planet.rotationTimeUnit}
          </span>
        </li>
        <li className='flex justify-between items-center px-6 py-3 border-solid border-[1px] border-foreground/20'>
          <h3 className='font-spartan font-medium text-sm uppercase text-foreground/50 tracking-[0.73px]'>
            revolution time
          </h3>
          <span className='text-xl uppercase'>
            {planet.revolutionTime.toLocaleString()} {planet.revolutionTimeUnit}
          </span>
        </li>
        <li className='flex justify-between items-center px-6 py-3 border-solid border-[1px] border-foreground/20'>
          <h3 className='font-spartan font-medium text-sm uppercase text-foreground/50 tracking-[0.73px]'>
            radius
          </h3>
          <span className='text-xl'>{planet.radius.toLocaleString()} KM</span>
        </li>
        <li className='flex justify-between items-center px-6 py-3 border-solid border-[1px] border-foreground/20'>
          <h3 className='font-spartan font-medium text-sm uppercase text-foreground/50 tracking-[0.73px]'>
            average temp
          </h3>
          <span className='text-xl'>{planet.averageTemperature}&deg;C</span>
        </li>
      </ul>
    </div>
  );
};

export default PlanetDetailPage;
