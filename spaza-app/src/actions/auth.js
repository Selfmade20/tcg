import axios from "axios";

export const register = (registerDetails) => {
  return async () => {
    try {
      await axios.post("http://localhost:5000/user/register", registerDetails);
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (loginDetails) => {
  return async () => {
    try {
      await axios.post("http://localhost:5000/user/login", loginDetails);
    } catch (error) {
      console.log(error);
    }
  };
};
