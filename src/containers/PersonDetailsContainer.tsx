import React from "react";
import swapi from "services/swapi";

import ResourceDetailsContainer from "./ResourceDetailsContainer";
import { SWAPI_RESOURCES } from "../constants";

const TITLE_KEY = "name";
const DETAILS_KEYS = [
  "birth_year",
  "eye_color",
  "gender",
  "hair_color",
  "height",
  "mass",
  "skin_color"
];

function PersonDetailsContainer() {
  function fetchPerson(id: string, params: Record<string, any> = {}) {
    return swapi.person({ id, params });
  }

  return (
    <ResourceDetailsContainer
      resource={SWAPI_RESOURCES.PEOPLE}
      resourceFunction={fetchPerson}
      detailsKeys={DETAILS_KEYS}
      titleKey={TITLE_KEY}
    />
  );
}

export default PersonDetailsContainer;
