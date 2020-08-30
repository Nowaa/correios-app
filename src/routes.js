import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Tracker from "./pages/Tracker";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tracker/:number" component={Tracker} />
      </Switch>
    </BrowserRouter>
  );
}
