import React from "react";
import swapi from "services/swapi";

import ResourceDetailsContainer from "./ResourceDetailsContainer";
import { SWAPI_RESOURCES } from "../constants";

const TITLE_KEY = "name";
const DETAILS_KEYS = [
  "average_height",
  "average_lifespan",
  "classification",
  "designation",
  "eye_colors",
  "hair_colors",
  "language"
];

function SpeciesDetailsContainer() {
  function fetchSpecies(id: string, params: Record<string, any> = {}) {
    return swapi.singleSpecies({ id, params });
  }

  return (
    <ResourceDetailsContainer
      resource={SWAPI_RESOURCES.SPECIES}
      resourceFunction={fetchSpecies}
      detailsKeys={DETAILS_KEYS}
      titleKey={TITLE_KEY}
    />
  );
}

export default SpeciesDetailsContainer;
