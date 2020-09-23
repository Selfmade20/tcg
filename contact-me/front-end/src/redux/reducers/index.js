import { combineReducers } from "redux";
import userReducer from "./userReducer";
import companiesReducer from "./companiesReducer";

export const rootReducer = combineReducers({
  userReducer,
  companiesReducer,
});
