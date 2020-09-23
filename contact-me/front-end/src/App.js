import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
