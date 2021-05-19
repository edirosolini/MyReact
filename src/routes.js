// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "./Components/App";
import Home from "./Components/Home";
import Page404 from "./Components/Page404";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>
);

export default Routes;
