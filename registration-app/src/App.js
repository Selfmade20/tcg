import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { NavigationBar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <NavigationBar />
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
