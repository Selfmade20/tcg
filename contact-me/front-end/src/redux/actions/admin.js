import axios from "axios";
import history from "../../history";

const reloadWindow = () => {
  window.location.reload(false);
};

export const signin = (loginDetails) => {
  return async () => {
    try {
      await axios.post("http://localhost:4500/account/login", loginDetails);
      history.push("/companies");
      reloadWindow();
    } catch (error) {
      console.log(error);
    }
  };
};
