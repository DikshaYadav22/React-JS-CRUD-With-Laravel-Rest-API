import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Details from "./details";
import Edit from "./edit";
import Delete from "./details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/edit/:id" component={Edit} />
      </Switch>
    </Router>
  );
};

export default App;
