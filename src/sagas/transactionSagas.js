import { effects } from 'redux-saga';
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
    const personalDetails = yield effects.call(fetchPersonalDetailsService);
    yield effects.put(finishedFetchingPersonalDetails(personalDetails));
  } catch (e) {
    yield effects.put(errorFetchingPersonalDetails('Error Fetching Personal Details'));
  }
}

export function* fetchFriendsSaga({ payload: { userId } }) {
  try {
    const friends = yield effects.call(fetchFriendsService, userId);
    yield effects.put(finishedFetchingFriends(friends));
  } catch (e) {
    yield effects.put(errorFetchingFriends('error occured while fetching friends'));
  }
}

export function* sendSaga({ payload: { transaction, availableFunds } }) {
  try {
    const lastTransaction = yield effects.call(sendService, transaction, availableFunds);
    yield effects.put(finishedSending(lastTransaction));
  } catch (e) {
    yield effects.put(errorSending('error occured while sending money'));
  }
}

export function* sagas() {
  yield effects.all([
    effects.takeLatest(SEND, sendSaga),
    effects.takeLatest(FETCH_FRIENDS, fetchFriendsSaga),
    effects.takeLatest(FETCH_PERSONAL_DETAILS, fetchPersonalDetailsSaga),
  ]);
}