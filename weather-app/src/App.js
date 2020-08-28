import React from "react";
import "./App.css";

const api = {
  key: "2a8e4f918c3b02125cb8594fb357cbdd",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search...." />
        </div>
      </main>
    </div>
  );
}

export default App;
