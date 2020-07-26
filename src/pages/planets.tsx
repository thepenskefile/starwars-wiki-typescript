import React from "react";
import ResourceContainer from "containers/ResourceContainer";
import swapi from "services/swapi";
import { SWAPI_RESOURCES } from "../constants";

function Planets() {
  function fetchPlanets(params: Record<string, any> = {}) {
    return swapi.planets(params);
  }

  return (
    <ResourceContainer
      resourceFunction={fetchPlanets}
      name={("planets" as unknown) as typeof SWAPI_RESOURCES}
    />
  );
}

export default Planets;
