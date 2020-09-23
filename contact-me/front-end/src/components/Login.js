import React, { useState } from "react";
import "./Login.css";
import { signin } from "../redux/actions/admin";
import { useDispatch } from "react-redux";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(signin(loginDetails));
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign in</h1>
        <form onSubmit={(e) => submit(e)}>
          <h5>Email</h5>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            value={loginDetails.email}
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
            name="password"
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                [e.target.name]: e.target.value,
              })
            }
            value={loginDetails.password}
          />
          <button
            type="submit"
            onClick={submit}
            className="login__signInButton "
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in, you agree to Tebogo's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
