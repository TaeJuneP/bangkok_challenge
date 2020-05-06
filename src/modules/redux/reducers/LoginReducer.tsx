import * as types from "../actions/types";
import { LoginActionTypes } from "../actions";

export type LoginInfo = {
  loginInfo: any;
};

const initialState: LoginInfo = {
  loginInfo: { user: { id: "", nickname: "", img: "" }, token: "", login: false }
};

const LoginReducer = (
  state = initialState,
  action: LoginActionTypes
): LoginInfo => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginInfo: { user: { id: action.payload.id, nickname: action.payload.nickname, img: action.payload.profile_photo }, token: action.payload.serviceAccessToken, login: true }
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loginInfo: {}
      };
    default:
      return state;
  }
};

export default LoginReducer;
