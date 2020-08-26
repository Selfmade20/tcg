import axios from "axios";
import jwtDecode from "jwt-decode";

export const login = (loginDetails) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http:/localhost:5000/user/login",
        loginDetails
      );
      const decodedToken = jwtDecode(data.token);
      dispatch({ type: "AUTH_SAVE_USER", payload: decodedToken });
      dispatch({ type: "CHANGE_AUTHORIZATION", payload: true });
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
    }
  };
};
