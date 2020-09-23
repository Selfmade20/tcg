import React, { useState, useEffect } from "react";
import axios from "axios";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/company/")
      .then((res) => {
        console.log("Correct", res);
        setCompanies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>{company.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default Companies;
