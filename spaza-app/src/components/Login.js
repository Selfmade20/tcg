import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
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
               <input type="text" />
               <h5>Password</h5>
               <input type="password" />
               <button>Sign in</button>
           </form>
           <p>
           By signing-in, you agree to Tebogo's Conditions of Use and Privacy Notice.
           </p>
           <button>Create Account</button>
      </div>
    </div>
  );
}

export default Login;
