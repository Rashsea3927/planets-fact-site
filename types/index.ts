export type PlanetName = {
  _id: string;
  name: string;
  color: {
    hex: string;
  };
};

export type PlanetWithImage = {
  _id: string;
  name: string;
  color: {
    hex: string;
  };
  imageUrl: string;
};

export type PlanetDetail = {
  _id: string;
  name: string;
  color: {
    hex: string;
  };
  radius: number;
  rotationTime: number;
  rotationTimeUnit: string;
  revolutionTime: number;
  revolutionTimeUnit: string;
  averageTemperature: number;
  descriptions: {
    overviewDescription: string;
    structureDescription: string;
    surfaceDescription: string;
  };
  surfaceGeology: string;
  internalStructure: string;
  images: {
    url: string;
  }[];
};
