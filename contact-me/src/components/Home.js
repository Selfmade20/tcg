import React, { useState } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";

function Home() {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    webAddress: "",
    physicalAddress: "",
    email: "",
  });

  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    dispatch(register(registerDetails));
  };

  const handleChange = (event) => {
    event.preventDefault();
    setRegisterDetails({
      ...registerDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <h1 className="header">Contact Me</h1>
      <form onSubmit={(e) => submit(e)}>
        <h5>Name</h5>
        <input
          type="name"
          value={registerDetails.name}
          placeholder="Name..."
          onChange={handleChange}
        />
        <h5>Web-Address</h5>
        <input
          type="address"
          value={registerDetails.webAddress}
          placeholder="Web Address..."
          onChange={handleChange}
        />
        <h5>Physical-Address</h5>
        <input
          type="address"
          value={registerDetails.physicalAddress}
          placeholder="Physical Address..."
          onChange={handleChange}
        />
        <h5>Email</h5>
        <input
          type="email"
          value={registerDetails.email}
          placeholder="Email..."
          onChange={handleChange}
        />
        <button type="submit" className="register__button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Home;
