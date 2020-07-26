import React from "react";
import ResourceContainer from "containers/ResourceContainer";
import swapi from "services/swapi";
import { SWAPI_RESOURCES } from "../constants";

function Vehicles() {
  function fetchVehicles(params: Record<string, any> = {}) {
    return swapi.vehicles(params);
  }

  return (
    <ResourceContainer
      resourceFunction={fetchVehicles}
      name={("vehicles" as unknown) as typeof SWAPI_RESOURCES}
    />
  );
}

export default Vehicles;
