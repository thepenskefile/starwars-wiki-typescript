import React from "react";
import ResourceContainer from "containers/ResourceContainer";
import swapi from "services/swapi";
import { SWAPI_RESOURCES } from "../constants";

function Species() {
  function fetchSpecies(params: Record<string, any> = {}) {
    return swapi.species(params);
  }

  return (
    <ResourceContainer
      resourceFunction={fetchSpecies}
      name={SWAPI_RESOURCES.SPECIES}
    />
  );
}

export default Species;
