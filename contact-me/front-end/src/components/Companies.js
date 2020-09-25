import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Companies.css";
import { Button } from "@material-ui/core";

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
    <div className="container">
      <ul className="grid">
        {companies.map((company) => (
          <li key={company.name}>
            {" "}
            <h1>Company Name: {company.name}</h1>{" "}
            <h4>Address: {company.physicalAddress}</h4>{" "}
            <h3> Email: {company.emailAddress}</h3>{" "}
            <h3>Website Address: {company.websiteAddress}</h3>{" "}
            <h3>Phone Number: {company.phoneNumber}</h3>
            <Link to="/customer" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Select
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Companies;
