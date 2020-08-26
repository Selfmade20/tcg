import axios from "axios";
import createBrowserHistory from "../history/index";

export const register = (registerDetails) => {
  const registerReloadWindow = () => {
    window.location.reload();
  };

  return async () => {
    try {
      await axios.post("http://localhost:5000/user/register", registerDetails);
      createBrowserHistory.push("/home");
      registerReloadWindow();
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (loginDetails) => {
  const loginReloadWindow = () => {
    window.location.reload();
  };

  return async () => {
    try {
      await axios.post("http://localhost:5000/user/login", loginDetails);
      createBrowserHistory.push("/register");
      loginReloadWindow();
    } catch (error) {
      console.log(error);
    }
  };
};
