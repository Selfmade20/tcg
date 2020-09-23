import axios from "axios";

export const getCompanies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:4500/company/");
      dispatch({ type: "GET_ALL_COMPANIES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
