import {
  call,
  takeLatest,
  put,
  all
} from 'redux-saga/effects';
import { SEND, FETCH_FRIENDS, FETCH_PERSONAL_DETAILS } from '../constants/actionTypes';
import { fetchFriendsService, fetchPersonalDetailsService, sendService } from '../api/service';
import {
  finishedFetchingPersonalDetails,
  errorFetchingPersonalDetails,
  finishedFetchingFriends,
  errorFetchingFriends,
  finishedSending,
  errorSending
} from '../actions';

export function* fetchPersonalDetailsSaga() {
  try {
    const personalDetails = yield call(fetchPersonalDetailsService);
    yield put(finishedFetchingPersonalDetails(personalDetails));
  } catch (e) {
    yield put(errorFetchingPersonalDetails('Error Fetching Personal Details'));
  }
}

export function* fetchFriendsSaga({ payload: { userId } }) {
  try {
    const friends = yield call(fetchFriendsService, userId);
    yield put(finishedFetchingFriends(friends));
  } catch (e) {
    yield put(errorFetchingFriends('error occured while fetching friends'));
  }
}

export function* sendSaga({ payload: { transaction } }) {
  try {
    const lastTransaction = yield call(sendService, transaction);
    yield put(finishedSending(lastTransaction));
  } catch (e) {
    yield put(errorSending('error occured while sending money'));
  }
}

export function* sagas() {
  yield all([
    takeLatest(SEND, sendSaga),
    takeLatest(FETCH_FRIENDS, fetchFriendsSaga),
    takeLatest(FETCH_PERSONAL_DETAILS, fetchPersonalDetailsSaga),
  ]);
}