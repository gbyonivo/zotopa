import { call, all, put, takeLatest } from 'redux-saga/effects';
import { fetchPersonalDetailsSaga, fetchFriendsSaga, sendSaga, sagas } from '../../src/sagas/transactionSagas';
import { fetchPersonalDetailsService, fetchFriendsService, sendService } from '../../src/api/service';
import { finishedFetchingPersonalDetails, finishedFetchingFriends, finishedSending } from '../../src/actions';
import { SEND, FETCH_FRIENDS, FETCH_PERSONAL_DETAILS } from '../../src/constants/actionTypes';

describe('Fetch Personal Details Saga', () => {
  it('should call some specific functions', () => {
    const gen = fetchPersonalDetailsSaga();
    const actual = [
      gen.next(),
      gen.next(1),
      gen.next()
    ];

    const expected = [
      { done: false, value: call(fetchPersonalDetailsService) },
      { done: false, value: put(finishedFetchingPersonalDetails(1)) },
      { done: true }
    ];

    expect(actual).toEqual(expected);
  });
});

describe('Fetch Friends Sagas', () => {
  it('should call specific function', () => {
    const gen = fetchFriendsSaga({ payload: { userId: 'jumanji' } });
    const actual = [
      gen.next('jumanji'),
      gen.next([]),
      gen.next()
    ];

    const expected = [
      { done: false, value: call(fetchFriendsService, 'jumanji') },
      { done: false, value: put(finishedFetchingFriends([])) },
      { done: true }
    ];

    expect(actual).toEqual(expected);
  });
});

describe('Send Saga', () => {
  it('should call specific function', () => {
    const gen = sendSaga({ payload: { transaction: {} } });
    const actual = [
      gen.next({}),
      gen.next({}),
      gen.next(),
    ];
    const expected = [
      { done: false, value: call(sendService, {}) },
      { done: false, value: put(finishedSending({})) },
      { done: true },
    ];
    expect(actual).toEqual(expected);
  });
});

describe('Sagas - default', () => {
  it('ahould return all sagas', () => {
    const gen = sagas();
    const actual = [
      gen.next(),
      gen.next()
    ];
    const expected = [
      {
        done: false,
        value: all([
          takeLatest(SEND, sendSaga),
          takeLatest(FETCH_FRIENDS, fetchFriendsSaga),
          takeLatest(FETCH_PERSONAL_DETAILS, fetchPersonalDetailsSaga),
        ])
      },
      { done: true }
    ];
    expect(actual).toEqual(expected);
  });
});