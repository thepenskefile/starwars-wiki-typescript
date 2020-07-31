import React from "react";
import swapi from "services/swapi";

import ResourceDetailsContainer from "./ResourceDetailsContainer";
import { SWAPI_RESOURCES } from "../constants";

const TITLE_KEY = "name";
const DETAILS_KEYS = [
  "model",
  "cargo-capacity",
  "consumables",
  "cost_in_credits",
  "crew",
  "length",
  "manufacturer",
  "max_atmosphering_speed",
  "passengers"
];

function VehicleDetailsContainer() {
  function fetchVehicle(id: string, params: Record<string, any> = {}) {
    return swapi.vehicle({ id, params });
  }

  return (
    <ResourceDetailsContainer
      resource={SWAPI_RESOURCES.VEHICLES}
      resourceFunction={fetchVehicle}
      detailsKeys={DETAILS_KEYS}
      titleKey={TITLE_KEY}
    />
  );
}

export default VehicleDetailsContainer;
