import { combineReducers } from "redux";
import login, { LoginInfo } from "./LoginReducer";
import modal, { ModalInfo } from "./ModalReducer"
import notice, { NoticeInfo } from "./NoticeReducer"
export type RootState = {
  login: LoginInfo;
  modal: ModalInfo;
  notice: NoticeInfo;
};

const rootReducer = combineReducers({
  login,
  modal,
  notice
});

export default rootReducer;
