import { getPlanets } from '@/sanity/sanity.query';
import { Planet } from '@/types';
import Image from 'next/image';

export const HomePage = async () => {
  const planets: Planet[] = await getPlanets();
  return (
    <ul className='grid'>
      {planets.map((planet) => (
        <li key={planet._id}>
          <h2>{planet.name}</h2>
          <div className='relative w-[240px] h-[240px]'>
            <Image className='w-full h-auto' src={planet.imageUrl} alt={planet.name} fill />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
