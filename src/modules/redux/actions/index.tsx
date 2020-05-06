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

// 게시물
export type GetNoticeRequestAction = {
  type: typeof types.GET_NOTICE_REQUEST;
}

export const getNoticeRequest = (): GetNoticeRequestAction => ({
  type: types.GET_NOTICE_REQUEST
});

export type GetNoticeSuccessAction = {
  type: typeof types.GET_NOTICE_SUCCESS;
  payload: any;
}

export const getNoticeSuccess = (notice: any): GetNoticeSuccessAction => ({
  type: types.GET_NOTICE_SUCCESS,
  payload: notice
})
export type GetNoticeFailureAction = {
  type: typeof types.GET_NOTICE_FAILURE;
}

export const getNoticeFailure = (): GetNoticeFailureAction => ({
  type: types.GET_NOTICE_FAILURE
});

export type PostNoticeRequestAction = {
  type: typeof types.POST_NOTICE_REQUEST;
}

export const postNoticeRequest = (): PostNoticeRequestAction => ({
  type: types.POST_NOTICE_REQUEST
});

// export type GetNoticeSuccessAction = {
//   type: typeof types.GET_NOTICE_SUCCESS;
//   payload: any;
// }

// export const getNoticeSuccess = (notice: any): GetNoticeSuccessAction => ({
//   type: types.GET_NOTICE_SUCCESS,
//   payload: notice
// })
// export type GetNoticeFailureAction = {
//   type: typeof types.GET_NOTICE_FAILURE;
// }

// export const getNoticeFailure = (): GetNoticeFailureAction => ({
//   type: types.GET_NOTICE_FAILURE
// });



export type LoginActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;

export type NoticeActionTypes =
  | GetNoticeRequestAction
  | GetNoticeSuccessAction
  | GetNoticeFailureAction
  | PostNoticeRequestAction;