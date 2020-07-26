import React from "react";
import ResourceContainer from "containers/ResourceContainer";
import swapi from "services/swapi";
import { SWAPI_RESOURCES } from "../constants";

function Films() {
  function fetchFilms(params: Record<string, any> = {}) {
    return swapi.films(params);
  }

  return (
    <ResourceContainer
      resourceFunction={fetchFilms}
      name={("films" as unknown) as typeof SWAPI_RESOURCES}
    />
  );
}

export default Films;
