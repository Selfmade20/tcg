import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

function Login() {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const login = () => {};

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
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={loginDetails.email}
            placeholder="Email"
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                [e.target.name]: e.target.value,
              })
            }
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                [e.target.name]: e.target.value,
              })
            }
          />
          <button
            type="submit"
            onClick={login}
            className="login__signInButton "
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in, you agree to Tebogo's Conditions of Use and Privacy
          Notice.
        </p>
        <small>New to BioWare?</small>
        <button className="login__registerbutton">Create Account</button>
      </div>
    </div>
  );
}

export default Login;
