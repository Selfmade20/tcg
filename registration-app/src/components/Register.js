import React from "react";
import "./Register.css";

function Registration() {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    idNumber: "",
    address: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    
  };
  return (
    <div className="register">
      <div className="register__container">
        <h1>Sign up</h1>
        <form>
          <h5>Name</h5>
          <input type="text" name="name" placeholder="Name" />
          <h5>Surname</h5>
          <input type="surname" placeholder="Surname" name="surname" />
          <h5>Email</h5>
          <input type="email" placeholder="Email" name="email" />
          <h5>ID Number</h5>
          <input type="id" placeholder="ID Number" name="id" />
          <h5>Address</h5>
          <input type="address" placeholder="Address" name="address" />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
