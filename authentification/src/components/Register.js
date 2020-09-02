import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Register() {
  const [registerDetails, setRegisterDetails] = useState({
    email: "",
    password: "",
  });

  const submit = (event) => {
    event.preventDefault();
    // dispatch(register(registerDetails));
  };

  const handleChange = (event) => {
    event.preventDefault();
    setRegisterDetails({
      ...registerDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://inspire.designs.ai/wp-content/uploads/2019/07/gaming-logo-maker-bioware-200x154.jpg"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign up</h1>
        <form onSubmit={(e) => submit(e)}>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={registerDetails.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={registerDetails.password}
            onChange={handleChange}
          />
          <button type="submit" className="login__signInButton ">
            Sign up
          </button>
        </form>
        <p>
          By signing-up, you agree to Tebogo's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Register;
