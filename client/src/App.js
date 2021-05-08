import { React, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Imprint from "./Components/Imprint.js";
import Privacy from "./Components/Privacy";
import axios from "axios";

export default function App() {
  useEffect(() => {
    axios.get("localhost:5000").then((res) => {
      console.log(res.data.message);
    });
  });
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
