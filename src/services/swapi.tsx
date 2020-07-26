import axios from "axios";
import _get from "lodash/get";

interface ResourceParams {
  params?: Record<string, any>;
}

interface SingleResourceParams {
  id: number;
  params?: Record<string, any>;
}

const parseSwapiResponse = ({ response, id, name }) => {
  const meta = {
    count: _get(response, "data.count"),
    next: _get(response, "data.next"),
    previous: _get(response, "data.previous")
  };

  const formattedData = _get(response, "data.results", []).map(result => ({
    ...result,
    _id: _get(result, id),
    _name: _get(result, name)
  }));

  return {
    data: formattedData,
    meta
  };
};

const swapiAxios = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: { "Content-Type": "application/json" }
});

const swapi = {
  axios: swapiAxios,
  async person({ id, params }: SingleResourceParams) {
    const response = await this.axios.get(`/people/${id}`, {
      params
    });

    return parseSwapiResponse({
      response,
      name: "name",
      id: "name"
    });
  },
  async people({ params }: ResourceParams) {
    const response = await this.axios.get(`/people`, { params });

    return parseSwapiResponse({
      response,
      name: "name",
      id: "name"
    });
  },
  async film({ id, params }: SingleResourceParams) {
    const response = await this.axios.get(`/films/${id}`, { params });
    return parseSwapiResponse({
      response,
      name: "title",
      id: "episode_id"
    });
  },
  async films({ params }: ResourceParams) {
    const response = await this.axios.get(`/films`, { params });
    return parseSwapiResponse({
      response,
      name: "title",
      id: "episode_id"
    });
  },
  async starship({ id, params }: SingleResourceParams) {
    const response = await this.axios.get(`/starships/${id}`, { params });
    return parseSwapiResponse({
      response,
      name: "name",
      id: "model"
    });
  },
  async starships({ params }: ResourceParams) {
    const response = await this.axios.get(`/starships/`, { params });
    return parseSwapiResponse({
      response,
      name: "name",
      id: "model"
    });
  },
  async vehicle({ id, params }: SingleResourceParams) {
    const response = await this.axios.get(`/vehicles/${id}`, { params });
    return parseSwapiResponse({
      response,
      name: "name",
      id: "model"
    });
  },
  async vehicles({ params }: ResourceParams) {
    const response = await this.axios.get(`/vehicles`, { params });
    return parseSwapiResponse({
      response,
      name: "name",
      id: "model"
    });
  },
  async singleSpecies({ id, params }: SingleResourceParams) {
    const response = await this.axios.get(`/species/${id}`, { params });
    return parseSwapiResponse({
      response,
      name: "name",
      id: "name"
    });
  },
  async species({ params }: ResourceParams) {
    const response = await this.axios.get(`/species`, { params });
    return parseSwapiResponse({
      response,
      name: "name",
      id: "name"
    });
  },
  async planet({ id, params }: SingleResourceParams) {
    const response = await this.axios.get(`/planets/${id}`, { params });
    return parseSwapiResponse({
      response,
      name: "name",
      id: "name"
    });
  },
  async planets({ params }: ResourceParams) {
    const response = await this.axios.get(`/planets`, { params });
    return parseSwapiResponse({
      response,
      name: "name",
      id: "name"
    });
  }
};

export default swapi;
