import { takeEvery } from "redux-saga/effects";
import { loginApi } from "../apis";
import { LoginActionTypes } from "../redux/actions";
import { LOGIN_REQUEST } from "../redux/actions/types";

function* groupLogin({ user, passwd }: any) {

}



function* rootSaga() {
  yield takeEvery(LOGIN_REQUEST, groupLogin)
}

export default rootSaga;
