import React from "react";
import { Spinner } from "bumbag";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "components/Header";
const Index = React.lazy(() => import("./pages/index"));
const Films = React.lazy(() => import("./pages/films"));
const People = React.lazy(() => import("./pages/people"));
const Starships = React.lazy(() => import("./pages/starships"));
const Vehicles = React.lazy(() => import("./pages/vehicles"));
const Species = React.lazy(() => import("./pages/species"));
const Planets = React.lazy(() => import("./pages/planets"));

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Header />
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/films" component={Films} />
        <Route path="/people" component={People} />
        <Route path="/starships" component={Starships} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/species" component={Species} />
        <Route path="/planets" component={Planets} />
      </Router>
    </React.Suspense>
  );
}

export default App;
