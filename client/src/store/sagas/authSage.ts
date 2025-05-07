import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  registerRequest,
  registerSuccess,
} from "../slices/authSlice";
import { fetchUserApi, loginApi, registerApi } from "@/api/auth";
import { LoginPayload, RegisterPayload } from "@/types/auth";

function* fetchUserSaga(): Generator {
  try {
    const user = yield call(fetchUserApi);
    yield put(fetchUserSuccess(user));
  } catch (error: any) {
    yield put(fetchUserFailure(error.message));
  }
}

function* registerSaga(action: {
  type: string;
  payload: RegisterPayload;
}): Generator {
  try {
    const response = yield call(registerApi, action.payload);

    yield put(registerSuccess(response.user));
  } catch (error: any) {
    console.log(error);
  }
}

function* loginSaga(action: {
  type: string;
  payload: LoginPayload;
}): Generator {
  try {
    const response = yield call(loginApi, action.payload);
    localStorage.setItem("accessToken", response.access_token);
    localStorage.setItem("refreshToken", response.refresh_token);
    yield put(loginSuccess(response.user));
  } catch (error: any) {
    yield put(loginFailure(error.response.data.error));
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.toString(), loginSaga);
  yield takeLatest(registerRequest.toString(), registerSaga);
  yield takeLatest(fetchUserRequest.toString(), fetchUserSaga);
}
