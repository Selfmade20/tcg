import React, { useState } from "react";
import "./Login.css";
import { signin } from "../redux/actions/admin";
import { useDispatch } from "react-redux";

function Customer() {
  //   const [loginDetails, setLoginDetails] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const dispatch = useDispatch();

  //   const submit = (e) => {
  //     e.preventDefault();
  //     dispatch(signin(loginDetails));
  //   };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Customer Form</h1>
        <form>
          <h5>Name</h5>
          <input type="name" name="name" placeholder="Name" />
          <h5>Surname</h5>
          <input type="surname" placeholder="Surname" name="surname" />
          <h5>Mobile Number</h5>
          <input type="number" placeholder="Mobile Number" name="number" />
          <h5>Email</h5>
          <input type="email" placeholder="Email" name="email" />
          <h5>Question</h5>
          <textarea name="paragraph_text" cols="35" rows="10" placeholder="Question?"></textarea>
          <button type="submit" className="login__signInButton ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Customer;
