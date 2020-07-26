import React from "react";
import ResourceContainer from "containers/ResourceContainer";
import swapi from "services/swapi";
import { SWAPI_RESOURCES } from "../constants";

function People() {
  function fetchPeople(options: Record<string, any> = {}) {
    return swapi.people(options);
  }

  return (
    <ResourceContainer
      resourceFunction={fetchPeople}
      name={("people" as unknown) as typeof SWAPI_RESOURCES}
    />
  );
}

export default People;
