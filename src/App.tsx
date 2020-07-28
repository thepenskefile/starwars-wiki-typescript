import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";

import Header from "components/Header";
import LoadingPage from "components/LoadingPage";
const Index = React.lazy(() => import("./pages/index"));
const Films = React.lazy(() => import("./pages/films"));
const People = React.lazy(() => import("./pages/people"));
const Starships = React.lazy(() => import("./pages/starships"));
const Vehicles = React.lazy(() => import("./pages/vehicles"));
const Species = React.lazy(() => import("./pages/species"));
const Planets = React.lazy(() => import("./pages/planets"));
const ResourceDetails = React.lazy(() =>
  import("./containers/ResourceDetailsContainer")
);
const FilmDetails = React.lazy(() =>
  import("./containers/FilmDetailsContainer")
);

// function detailsRoute() {
//   const { path, url } = useRouteMatch();
//   return (
//     <Switch>
//       <Route path={`${path}/:topicId`}>
//         <Topic />
//       </Route>
//     </Switch>
//   );
// }

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
          <Route path="/starships" exact component={Starships} />
          <Route path="/vehicles" exact component={Vehicles} />
          <Route path="/species" exact component={Species} />
          <Route path="/planets" exact component={Planets} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
