export const SWAPI_RESOURCES: Record<any, string> = {
  FILMS: "films",
  PEOPLE: "people",
  PLANETS: "planets",
  SPECIES: "species",
  STARSHIPS: "starships",
  VEHICLES: "vehicles"
} as const;

type Resources = keyof typeof SWAPI_RESOURCES;

export const SWAPI_RESOURCES_ARRAY: Array<Resources> = [
  [SWAPI_RESOURCES.FILMS],
  [SWAPI_RESOURCES.PEOPLE],
  [SWAPI_RESOURCES.PLANETS],
  [SWAPI_RESOURCES.SPECIES],
  [SWAPI_RESOURCES.STARSHIPS],
  [SWAPI_RESOURCES.VEHICLES]
];
