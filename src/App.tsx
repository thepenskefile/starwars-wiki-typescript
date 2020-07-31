import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "components/Header";
import LoadingPage from "components/LoadingPage";
const Index = React.lazy(() => import("./pages/index"));
const Films = React.lazy(() => import("./pages/films"));
const People = React.lazy(() => import("./pages/people"));
const Starships = React.lazy(() => import("./pages/starships"));
const Vehicles = React.lazy(() => import("./pages/vehicles"));
const Species = React.lazy(() => import("./pages/species"));
const Planets = React.lazy(() => import("./pages/planets"));
const FilmDetails = React.lazy(() =>
  import("./containers/FilmDetailsContainer")
);
const PersonDetails = React.lazy(() =>
  import("./containers/PersonDetailsContainer")
);
const PlanetDetails = React.lazy(() =>
  import("./containers/PlanetDetailsContainer")
);
const SpeciesDetails = React.lazy(() =>
  import("./containers/SpeciesDetailsContainer")
);
const StarshipDetails = React.lazy(() =>
  import("./containers/StarshipDetailsContainer")
);
const VehicleDetails = React.lazy(() =>
  import("./containers/VehicleDetailsContainer")
);
function App() {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/films" exact component={Films} />
          <Route path="/films/:id" component={FilmDetails} />
          <Route path="/people" exact component={People} />
          <Route path="/people/:id" component={PersonDetails} />
          <Route path="/starships" exact component={Starships} />
          <Route path="/starships/:id" component={StarshipDetails} />
          <Route path="/vehicles" exact component={Vehicles} />
          <Route path="/vehicles/:id" component={VehicleDetails} />
          <Route path="/species" exact component={Species} />
          <Route path="/species/:id" component={SpeciesDetails} />
          <Route path="/planets" exact component={Planets} />
          <Route path="/planets/:id" component={PlanetDetails} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
