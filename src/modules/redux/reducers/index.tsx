import { combineReducers } from "redux";
import login, { LoginInfo } from "./LoginReducer";

export type RootState = {
  login: LoginInfo;
};

const rootReducer = combineReducers({
  login
});

export default rootReducer;
