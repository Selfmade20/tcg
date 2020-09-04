import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
