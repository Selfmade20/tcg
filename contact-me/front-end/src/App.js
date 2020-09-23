import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Companies from "./components/Companies";
import Register from "./components/Register";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Login />
          </Route>
          <Route path="/logged">
            <Register />
          </Route>
          <Route path="/companies">
            <Navbar />
            <Companies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
