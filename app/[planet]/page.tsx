import ToggleCotnent from '@/components/ToggleCotnent';
import { getAllPlanetSlugs, getPlanetDetail } from '@/sanity/sanity.query';
import { PlanetDetail } from '@/types';

type Props = {
  params: {
    planet: string;
  };
};

export const generateStaticParams = async () => {
  const slugs = await getAllPlanetSlugs();
  return slugs.map((slug: { slug: string }) => ({
    params: { planet: slug.slug },
  }));
};

const PlanetDetailPage = async ({ params }: Props) => {
  const slug = params.planet;
  const planet: PlanetDetail = await getPlanetDetail(slug);

  return (
    <div className='grid md:grid-cols-2'>
      <ToggleCotnent
        images={planet.images}
        name={planet.name}
        color={planet.color.hex}
        descriptions={planet.descriptions}
      />
      <h2 className='text-center order-3 text-[40px] mb-4'>{planet.name.toUpperCase()}</h2>
      <ul className='flex flex-col order-4 gap-2 mx-6 mb-12'>
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
