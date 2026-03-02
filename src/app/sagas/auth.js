import { call } from 'redux-saga/effects';

import { userLogin } from '../api/auth';
import { USER_LOGIN_ERROR } from '../actions';

export function* userLoginSaga(action) {
  yield put({ type: USER_LOGIN_REQUEST });
  try {
    const response = yield call(userLogin, action.payload);
  } catch (error) {
    yield put({ type: USER_LOGIN_ERROR, payload: error.message });
  }
}
