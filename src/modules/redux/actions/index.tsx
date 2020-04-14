import * as types from "./types";


// 로그인
export type LoginRequestAction = {
  type: typeof types.LOGIN_REQUEST;
};

export const loginRequest = (): LoginRequestAction => ({
  type: types.LOGIN_REQUEST
});

export type LoginSuccessAction = {
  type: typeof types.LOGIN_SUCCESS;
  payload: any;
};

export const loginSuccess = (loginInfo: any): LoginSuccessAction => ({
  type: types.LOGIN_SUCCESS,
  payload: loginInfo
});

export type LoginFailureAction = {
  type: typeof types.LOGIN_FAILURE;
};
export const groupLoginFailure = (): LoginFailureAction => ({
  type: types.LOGIN_FAILURE
});


// 모달
export type ModalIsVisibleAction = {
  type: typeof types.MODAL_ISVISIBLE;
  payload: boolean
}

export const modalIsVisible = (): ModalIsVisibleAction => ({
  type: types.MODAL_ISVISIBLE,
  payload: false
});

export type LoginActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
