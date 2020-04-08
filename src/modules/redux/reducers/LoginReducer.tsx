import * as types from "../actions/types";
import { LoginActionTypes } from "../actions";

export type LoginInfo = {
  loginInfo: any;
};

const initialState: LoginInfo = {
  loginInfo: {}
};

const LoginReducer = (
  state = initialState,
  action: LoginActionTypes
): LoginInfo => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginInfo: action.payload
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
