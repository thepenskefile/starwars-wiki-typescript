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
  "hyperdrive_rating",
  "length",
  "manufacturer",
  "max_atmosphering_speed",
  "passengers",
  "starship_class"
];

function StarshipDetailsContainer() {
  function fetchStarship(id: string, params: Record<string, any> = {}) {
    return swapi.starship({ id, params });
  }

  return (
    <ResourceDetailsContainer
      resource={SWAPI_RESOURCES.STARSHIPS}
      resourceFunction={fetchStarship}
      detailsKeys={DETAILS_KEYS}
      titleKey={TITLE_KEY}
    />
  );
}

export default StarshipDetailsContainer;
