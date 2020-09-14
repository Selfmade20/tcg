import React, { useState } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";

function Home() {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    surname: "",
    mobileNumber: "",
    email: "",
    question: "",
  });

  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    dispatch(register(registerDetails));
  };

  const handleChange = (event) => {
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
          type="text"
          placeholder="Name..."
          onChange={handleChange}
        />
        <h5>Surname</h5>
        <input
          type="address"
          placeholder="Surname..."
          onChange={handleChange}
        />
        <h5>Mobile-Number</h5>
        <input
          type="cell"
          placeholder="Mobile Number..."
          onChange={handleChange}
        />
        <h5>Email</h5>
        <input
          type="email"
          placeholder="Email..."
          onChange={handleChange}
        />
        <h5>Question?</h5>
        <input
          type="question"
          placeholder="Question..."
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
