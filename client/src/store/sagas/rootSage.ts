import { all } from "redux-saga/effects";
import { authSaga } from "./authSage";

export default function* rootSaga() {
  yield all([authSaga()]);
}
