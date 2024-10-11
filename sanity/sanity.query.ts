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
