import { takeEvery, call, put } from "redux-saga/effects";
import {
  kakaoLogin,
  getNotices,
  postNotice,
  checkLoginToken,
  getLikeNotices,
  getMyNotices,
  getUserProfile,
} from "../apis";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CHECK_BKC_TOKEN,
  GET_NOTICE_REQUEST,
  GET_NOTICE_SUCCESS,
  GET_NOTICE_FAILURE,
  POST_NOTICE_REQUEST,
  GET_MYNOTICE_REQUEST,
  GET_LIKENOTICE_REQUEST,
} from "../redux/actions/types";

function* loginRequest({ token }: any) {
  try {
    const data = yield call(kakaoLogin, token);
    window.localStorage.setItem("bkc_token", data.serviceAccessToken);
    yield put({ type: LOGIN_SUCCESS, payload: data });
  } catch (err) {
    console.log("error");
    yield put({ type: LOGIN_FAILURE });
    window.localStorage.setItem("bkc_token", "null");
  }
}

function* getNoticeRequest({ token, page }: any) {
  try {
    const data = yield call(getNotices, token, page);
    yield put({
      type: GET_NOTICE_SUCCESS,
      payload: data.data._embedded.postList,
      page: data.data.page,
    });
  } catch (err) {
    console.log("error");
    yield put({ type: GET_NOTICE_FAILURE });
  }
}

function* getLikeNoticeRequest({ token, page }: any) {
  try {
    const data = yield call(getLikeNotices, token, page);
    yield put({
      type: GET_NOTICE_SUCCESS,
      payload: data.data._embedded.postList,
      page: data.data.page,
    });
  } catch (err) {
    console.log("error");
    yield put({ type: GET_NOTICE_FAILURE });
  }
}

function* getMyNoticeRequest({ token, page }: any) {
  try {
    const data = yield call(getMyNotices, token, page);
    yield put({
      type: GET_NOTICE_SUCCESS,
      payload: data.data._embedded.postList,
      page: data.data.page,
    });
  } catch (err) {
    console.log("error");
    yield put({ type: GET_NOTICE_FAILURE });
  }
}

function* postNoticeRequest({ token, formData }: any) {
  try {
    yield call(postNotice, token, formData);
    const data = yield call(getNotices, token, "0");
    yield put({
      type: GET_NOTICE_SUCCESS,
      payload: data.data._embedded.postList,
      page: data.data.page,
    });
  } catch (err) {
    console.log(err);
  }
}

function* checkBkcToken({ token }: any) {
  try {
    const data: any = yield call(checkLoginToken, token);
    const loginData: any = yield call(getUserProfile, data, token);
    yield put({ type: LOGIN_SUCCESS, payload: loginData });
  } catch (err) {
    window.localStorage.setItem("bkc_token", "null");
    yield put({ type: LOGIN_FAILURE });
  }
}
function* rootSaga() {
  yield takeEvery(LOGIN_REQUEST, loginRequest);
  yield takeEvery(GET_NOTICE_REQUEST, getNoticeRequest);
  yield takeEvery(GET_MYNOTICE_REQUEST, getMyNoticeRequest);
  yield takeEvery(GET_LIKENOTICE_REQUEST, getLikeNoticeRequest);
  yield takeEvery(POST_NOTICE_REQUEST, postNoticeRequest);
  yield takeEvery(CHECK_BKC_TOKEN, checkBkcToken);
}

export default rootSaga;
