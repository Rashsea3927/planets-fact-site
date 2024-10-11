export type PlanetName = {
  _id: string;
  name: string;
  color: {
    hex: string;
  };
};

export type Planet = {
  _id: string;
  name: string;
  color: {
    hex: string;
  };
  imageUrl: string;
};
