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
      name={SWAPI_RESOURCES.VEHICLES}
    />
  );
}

export default Vehicles;
