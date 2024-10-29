import ToggleCotnent from '@/components/ToggleCotnent';
import { getPlanetDetail, getPlanets } from '@/sanity/sanity.query';
import { PlanetDetail, PlanetWithImage } from '@/types';

type Props = {
  params: {
    planet: string;
  };
};

type displayKeysType = {
  rotationTime: 'rotation time';
  revolutionTime: 'revolution time';
  radius: 'radius';
  averageTemperature: 'average temp';
};

export const generateMetadata = async ({ params }: Props) => {
  const slug = params.planet;
  const planet: PlanetDetail = await getPlanetDetail(slug);

  return {
    title: `${planet.name} | The Planets`,
  };
};

export const generateStaticParams = async () => {
  const planets = await getPlanets();
  const slugs = planets.map((planet: PlanetWithImage) => ({ params: { planet: planet.slug } }));

  return slugs;
};

const PlanetDetailPage = async ({ params }: Props) => {
  const slug = params.planet;
  const planet: PlanetDetail = await getPlanetDetail(slug);
  // 表示するキーのリスト
  const displayKeys: displayKeysType = {
    rotationTime: 'rotation time',
    revolutionTime: 'revolution time',
    radius: 'radius',
    averageTemperature: 'average temp',
  };

  return (
    <div className='grid md:grid-cols-[1fr_0.85fr] lg:grid-cols-[1fr_auto] md:max-w-[680px] md:mx-auto md:pb-9 md:gap-x-15 xl:gap-x-24 lg:max-w-[960px] lg:gap-x-24 xl:max-w-[1110px] lg:pb-14'>
      <ToggleCotnent
        images={planet.images}
        name={planet.name}
        wikiLink={planet.wikipediaLink}
        color={planet.color.hex}
        descriptions={planet.descriptions}
      />
      <ul className='flex flex-col gap-2 mx-6 mb-12 md:mx-0 md:col-span-2 md:flex-row md:mt-7 md:mb-0 lg:mt-12 lg:gap-8'>
        {Object.entries(displayKeys).map(([key, label]) => {
          const value = planet[key as keyof PlanetDetail] as number | string;
          // 表示するキーに含まれていない場合はスキップ
          if (value === undefined) return null;

          return (
            <li
              key={key}
              className='flex md:flex-col md:flex-1 justify-between items-center px-6 py-3 border-solid border-[1px] border-foreground/20 md:px-4 md:pt-4 md:pb-5 md:items-start lg:gap-2 lg:px-6 lg:pt-5 lg:pb-7'
            >
              <h3 className='font-spartan font-medium text-sm uppercase text-foreground/50 tracking-[0.73px] md:text-[10px] lg:text-sm'>
                {label}
              </h3>
              <span className='text-xl uppercase md:text-2xl lg:text-4xl'>
                {typeof value === 'number' ? value.toLocaleString() : value}{' '}
                {key === 'rotationTime' && planet.rotationTimeUnit}
                {key === 'revolutionTime' && planet.revolutionTimeUnit}
                {key === 'averageTemperature' ? '°C' : ''}
                {key === 'radius' ? 'KM' : ''}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlanetDetailPage;
