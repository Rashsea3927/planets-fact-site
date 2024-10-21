import { getPlanetName } from '@/sanity/sanity.query';
import { PlanetName } from '@/types';
import MenuItem from './MenuItem';

const Menu = async () => {
  const planetNames: PlanetName[] = await getPlanetName();

  return (
    <nav>
      <ul className='sm:flex sm:gap-4 md:gap-8 sm:items-center lg:mt-1'>
        {planetNames.map((planet, index) => {
          return (
            <li
              key={planet.name}
              className='[&:not(:last-child)]:border-b-[1px] border-foreground/20 sm:border-none'
            >
              <MenuItem planet={planet} index={index} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
