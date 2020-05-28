import React from "react";
import { Switch, Route } from "react-router-dom";
import Offers from "./Pages/Offers";
import Catalog from "./Pages/Catalog";
import Contact from "./Pages/Contact Us";
import Home from "./Pages/HomePage";

const Path = () => (
  <Switch>
    <Route path="/offers">
      <Offers />
    </Route>
    <Route path="/catalog">
      <Catalog />
    </Route>
    <Route path="/contact us">
      <Contact />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Path;
