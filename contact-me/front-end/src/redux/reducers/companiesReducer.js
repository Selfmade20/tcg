const initialState = {
  companies: [],
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COMPANIES":
      return { ...state, companies: action.payload };
    default:
      return state;
  }
};

export default companiesReducer;
