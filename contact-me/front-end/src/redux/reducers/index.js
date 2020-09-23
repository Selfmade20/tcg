import { combineReducers } from "redux";
import userReducer from "./userReducer";
import companiesReducer from "./companyReducer";

export const rootReducer = combineReducers({
  userReducer,
  companiesReducer,
});
