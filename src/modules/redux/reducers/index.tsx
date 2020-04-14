import { combineReducers } from "redux";
import login, { LoginInfo } from "./LoginReducer";
import modal, { ModalInfo } from "./ModalReducer"

export type RootState = {
  login: LoginInfo;
  modal: ModalInfo
};

const rootReducer = combineReducers({
  login,
  modal
});

export default rootReducer;
