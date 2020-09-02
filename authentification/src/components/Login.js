import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './Login.css'
// import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  // const dispatch = useDispatch();

  const history = useHistory();

  const signChange = () => {
    let path = "/register";
    history.push(path);
  };

  const submit = (event) => {
    event.preventDefault();
    // dispatch(login(loginDetails));
    window.location.reload();
  };

  const handleChange = (event) => {
    event.preventDefault();
    setLoginDetails({
      ...loginDetails,
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
        <h1>Sign in</h1>
        <form onSubmit={(e) => submit(e)}>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={loginDetails.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginDetails.password}
            onChange={handleChange}
          />
          <button type="submit" className="login__signInButton ">
            Sign in
          </button>
        </form>
        <p>
          By signing-in, you agree to Tebogo's Conditions of Use and Privacy
          Notice.
        </p>
        <small>New to BioWare?</small>
        <button className="login__registerbutton" onClick={signChange}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
