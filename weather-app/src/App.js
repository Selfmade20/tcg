import React, { useState } from "react";
import "./App.css";

const api = {
  key: "2a8e4f918c3b02125cb8594fb357cbdd",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          setQuery('')
          console.log(weather)
        });
    }
  };

  const dateBuilder = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return `${date}`;
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            value={query}
            onKeyPress={search}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search...."
          />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">16°c</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
