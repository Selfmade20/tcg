import React, { useState } from "react";

function Login() {
  return (
    <div className="register">
      <div className="register__container">
        <h1>Sign in</h1>
        <form>
          <h5>ID Number</h5>
          <input type="text" name="name" placeholder="ID Number" />
          <h5>Email</h5>
          <input type="email" placeholder="Email" name="email" />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
