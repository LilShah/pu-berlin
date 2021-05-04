import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Imprint from "./Imprint.js";
import Privacy from "./Privacy";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/imprint">
          <Imprint />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
