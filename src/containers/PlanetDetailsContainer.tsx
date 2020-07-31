import React from "react";
import swapi from "services/swapi";

import ResourceDetailsContainer from "./ResourceDetailsContainer";
import { SWAPI_RESOURCES } from "../constants";

const TITLE_KEY = "name";
const DETAILS_KEYS = [
  "climate",
  "diameter",
  "gravity",
  "orbital_period",
  "population",
  "rotation_period",
  "surface_water",
  "terrain"
];

function PlanetDetailsContainer() {
  function fetchPlanet(id: string, params: Record<string, any> = {}) {
    return swapi.planet({ id, params });
  }

  return (
    <ResourceDetailsContainer
      resource={SWAPI_RESOURCES.PLANETS}
      resourceFunction={fetchPlanet}
      detailsKeys={DETAILS_KEYS}
      titleKey={TITLE_KEY}
    />
  );
}

export default PlanetDetailsContainer;
