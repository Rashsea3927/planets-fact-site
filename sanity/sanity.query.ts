import { groq } from 'next-sanity';
import client from './sanity.client';

export const getPlanetName = async () => {
  return await client.fetch(
    groq`*[_type == 'planet']{
      _id,
      name,
      color
    }`
  );
};

export const getPlanets = async () => {
  return await client.fetch(
    groq`*[_type == 'planet']{
      _id,
      name,
      color,
      "imageUrl": images[0].asset->url
    }`
  );
};

export const getPlanetDetail = async (slug: string) => {
  return await client.fetch(
    groq`*[_type == 'planet' && slug.current == $slug][0]{
      _id,
      name,
      color,
      radius,
      rotationTime,
      rotationTimeUnit,
      revolutionTime,
      revolutionTimeUnit,
      averageTemperature,
      description,
      surfaceGeology,
      internalStructure,
      images[] {
        'url': asset->url
      }
    }`,
    { slug }
  );
};
