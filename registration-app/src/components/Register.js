import React, { useState } from "react";
import "./Register.css";
import { register } from "../actions/auth";

function Registration() {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    surname: "",
    email: "",
    IDnumber: "",
    address: "",
  });

  const submit = (event) => {
    event.preventDefault();
  };
  console.log( submit);

  const handleChange = (event) => {
    event.preventDefault();
    setRegisterDetails({
      ...registerDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="register">
      <div className="register__container">
        <h1>Sign up</h1>
        <form onSubmit={(e) => submit(e)}>
          <h5>Name</h5>
          <input
            type="text"
            name="name"
            value={registerDetails.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <h5>Surname</h5>
          <input
            type="surname"
            placeholder="Surname"
            name="surname"
            value={registerDetails.surname}
            onChange={handleChange}
          />
          <h5>Email</h5>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={registerDetails.email}
          />
          <h5>ID Number</h5>
          <input
            type="text"
            placeholder="ID Number"
            name="text"
            onChange={handleChange}
            value={registerDetails.IDnumber}
          />
          <h5>Address</h5>
          <input
            type="address"
            placeholder="Address"
            name="address"
            value={registerDetails.address}
            onChange={handleChange}
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
