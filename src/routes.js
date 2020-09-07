import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./pages/Header";
import Tracker from "./pages/Tracker";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";

const Routes = () => (
  <BrowserRouter>
    <div class="flex flex-col min-h-screen">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tracker/:number" component={Tracker} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
