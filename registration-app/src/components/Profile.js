import React, { useState, useEffect } from "react";
import axios from "axios";

const api = {
  key: "http://localhost:4000/",
};

function Profile() {
  const [data, setData] = useState({});

  const getData = async (event) => {
    await fetch(`${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  };

  return (
    <ul>
      {setData}
      <button onClick={getData}>Get Data</button>
    </ul>
  );
}

export default Profile;
