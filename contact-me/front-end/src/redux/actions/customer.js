import axios from "axios";

export const submitInfo = (customerDetails) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4500/customer/capture",
        customerDetails
      );
      dispatch({ type: "SUBMIT_CUSTOMER_INFO", payload: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};
