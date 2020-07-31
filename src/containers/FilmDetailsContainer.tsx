import React from "react";
import swapi from "services/swapi";

import ResourceDetailsContainer from "./ResourceDetailsContainer";
import { SWAPI_RESOURCES } from "../constants";

const TITLE_KEY = "title";
const DETAILS_KEYS = [
  "created",
  "director",
  "producer",
  "release_date",
  "opening_crawl"
];

function FilmDetailsContainer() {
  function fetchFilm(id: string, params: Record<string, any> = {}) {
    return swapi.film({ id, params });
  }

  return (
    <ResourceDetailsContainer
      resource={SWAPI_RESOURCES.FILMS}
      resourceFunction={fetchFilm}
      detailsKeys={DETAILS_KEYS}
      titleKey={TITLE_KEY}
    />
  );
}

export default FilmDetailsContainer;
