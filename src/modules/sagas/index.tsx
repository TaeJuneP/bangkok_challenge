import { takeEvery, call, put } from "redux-saga/effects";
import { kakaoLogin, getNotices, postNotice, checkLoginToken } from "../apis";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CHECK_BKC_TOKEN,
  GET_NOTICE_REQUEST,
  GET_NOTICE_SUCCESS,
  GET_NOTICE_FAILURE,
  POST_NOTICE_REQUEST,
} from "../redux/actions/types";

function* loginRequest({ token }: any) {
  try {
    const data = yield call(kakaoLogin, token);
    console.log(data);
    yield put({ type: LOGIN_SUCCESS, payload: data });
  } catch (err) {
    console.log("error");
    yield put({ type: LOGIN_FAILURE });
  }
}

function* getNoticeRequest({ token }: any) {
  try {
    const data = yield call(getNotices, token);
    console.log(data);
    yield put({
      type: GET_NOTICE_SUCCESS,
      payload: data.data._embedded.postList,
    });
  } catch (err) {
    console.log("error");
    yield put({ type: GET_NOTICE_FAILURE });
  }
}

function* postNoticeRequest({ token, formData }: any) {
  try {
    yield call(postNotice, token, formData);
  } catch (err) {
    console.log(err);
  }
}

function* checkBkcToken({ loginData }: any) {
  try {
    yield call(checkLoginToken, loginData.token);
    yield put({ type: LOGIN_SUCCESS, payload: loginData });
  } catch (err) {
    yield put({ type: LOGIN_FAILURE });
  }
}
function* rootSaga() {
  yield takeEvery(LOGIN_REQUEST, loginRequest);
  yield takeEvery(GET_NOTICE_REQUEST, getNoticeRequest);
  yield takeEvery(POST_NOTICE_REQUEST, postNoticeRequest);
  yield takeEvery(CHECK_BKC_TOKEN, checkBkcToken);
}

export default rootSaga;
