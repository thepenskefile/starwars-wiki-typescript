import React from "react";
import ResourceContainer from "containers/ResourceContainer";
import swapi from "services/swapi";
import { SWAPI_RESOURCES } from "../constants";

function Starships() {
  function fetchStarships(params: Record<string, any> = {}) {
    return swapi.starships(params);
  }

  return (
    <ResourceContainer
      resourceFunction={fetchStarships}
      name={SWAPI_RESOURCES.STARSHIPS}
    />
  );
}

export default Starships;
