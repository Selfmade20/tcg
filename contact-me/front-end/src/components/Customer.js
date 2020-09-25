import React, { useState } from "react";
import "./Login.css";
import { submitInfo } from "../redux/actions/customer";
import { useDispatch } from "react-redux";

function Customer() {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    surname: "",
    mobileNumber: "",
    email: "",
    question: "",
  });

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(submitInfo(customerDetails));
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Customer Form</h1>
        <form onSubmit={(e) => submit(e)}>
          <h5>Name</h5>
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={customerDetails.name}
            onChange={(e) =>
              setCustomerDetails({
                ...customerDetails,
                [e.target.name]: e.target.value,
              })
            }
          />
          <h5>Surname</h5>
          <input
            type="surname"
            placeholder="Surname"
            name="surname"
            value={customerDetails.surname}
            onChange={(e) =>
              setCustomerDetails({
                ...customerDetails,
                [e.target.name]: e.target.value,
              })
            }
          />
          <h5>Mobile Number</h5>
          <input
            type="number"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={customerDetails.mobileNumber}
            onChange={(e) =>
              setCustomerDetails({
                ...customerDetails,
                [e.target.name]: e.target.value,
              })
            }
          />
          <h5>Email</h5>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={customerDetails.email}
            onChange={(e) =>
              setCustomerDetails({
                ...customerDetails,
                [e.target.name]: e.target.value,
              })
            }
          />
          <h5>Question</h5>
          <textarea
            name="question"
            cols="35"
            rows="10"
            placeholder="Question?"
            value={customerDetails.question}
            onChange={(e) =>
              setCustomerDetails({
                ...customerDetails,
                [e.target.name]: e.target.value,
              })
            }
          />
          <button
            type="submit"
            onClick={submit}
            className="login__signInButton "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Customer;
