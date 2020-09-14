import axios from "axios";

export const register = (registerDetails) => {
  return async () => {
    try {
      await axios.post("http://localhost:4000/capture", registerDetails);
    } catch (error) {
      console.log(error);
    }
  };
};
