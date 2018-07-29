import {
  FETCH_PERSONAL_DETAILS,
  FINISHED_FETCHING_PERSONAL_DETAILS,
  ERROR_FETCHING_PERSONAL_DETAILS,
  FINISHED_FETCHING_FRIENDS,
  FETCH_FRIENDS,
  ERROR_FETCHING_FRIENDS,
  ERROR_SENDING,
  SEND,
  FINISHED_SENDING
} from '../../src/constants/actionTypes';

import transactionReducer from '../../src/reducers/transaction';

const initialState = {
  personalDetails: {},
  lastTransaction: {},
  friends: [],
  errorSending: null,
  errorFetchingFriends: null,
  errorFetchingPersonalDetails: null,
  isSending: false,
  isFetchingPersonalDetails: false,
  isFetchingFriends: false,
  selectedFriend: {}
};

describe('Transaction Reducer', () => {
  it('Initial State - should return initial state', () => {
    const newState = transactionReducer(initialState, {});
    expect(newState).toMatchObject(initialState);
  });

  it('FINISHED_FETCHING_PERSONAL_DETAILS-should return new state', () => {
    const action = { payload: { personalDetails: { name: 'jumanji' } }, type: FINISHED_FETCHING_PERSONAL_DETAILS };
    const newState = transactionReducer(initialState, action);
    const expected = {
      ...initialState,
      personalDetails: {
        name: 'jumanji'
      }
    };
    expect(newState).toMatchObject(expected);
  });

  it('FINISHED_FETCHING_FRIENDS-should return new state', () => {
    const action = { payload: { friends: [{ name: 'jumanji' }] }, type: FINISHED_FETCHING_FRIENDS };
    const newState = transactionReducer(initialState, action);
    const expected = {
      ...initialState,
      friends: [{
        name: 'jumanji'
      }]
    };
    expect(newState).toMatchObject(expected);
  });

  it('FINISHED_SENDING-should return new state', () => {
    const action = { payload: { lastTransaction: { 0: { amount: 300, friendId: 6 } } }, type: FINISHED_SENDING };
    const currentState = { ...initialState, personalDetails: { availableFunds: 1000, transactions: {} } };
    const newState = transactionReducer(currentState, action);
    const expected = {
      ...currentState,
      personalDetails: { availableFunds: 700, transactions: { 0: { amount: 300, friendId: 6 } } },
      lastTransaction: {
        0: {
          amount: 300,
          friendId: 6
        }
      }
    };
    expect(newState).toMatchObject(expected);
  });

  it('FETCH_PERSONAL_DETAILS - should return new state', () => {
    const action = { type: FETCH_PERSONAL_DETAILS };
    const newState = transactionReducer(initialState, action);
    const expected = {
      ...initialState,
      isFetchingPersonalDetails: true
    };
    expect(newState).toMatchObject(expected);
  });

  it('FETCH_FRIENDS-should return new state', () => {
    const action = { type: FETCH_FRIENDS };
    const newState = transactionReducer(initialState, action);
    const expected = {
      ...initialState,
      isFetchingFriends: true
    };
    expect(newState).toMatchObject(expected);
  });

  it('SEND-should return new state', () => {
    const action = { type: SEND };
    const newState = transactionReducer(initialState, action);
    const expected = {
      ...initialState,
      isSending: true
    };
    expect(newState).toMatchObject(expected);
  });

  it('ERROR_FETCHING_PERSONAL_DETAILS-should return new state', () => {
    const action = { payload: { errorFetchingPersonalDetails: 'e' }, type: ERROR_FETCHING_PERSONAL_DETAILS };
    const newState = transactionReducer(initialState, action);
    const expected = {
      ...initialState,
      errorFetchingPersonalDetails: 'e'
    };
    expect(newState).toMatchObject(expected);
  });

  it('ERROR_FETCHING_FRIENDS-should return new state', () => {
    const action = { payload: { errorFetchingFriends: 'e' }, type: ERROR_FETCHING_FRIENDS };
    const newState = transactionReducer(initialState, action);
    const expected = {
      ...initialState,
      errorFetchingFriends: 'e'
    };
    expect(newState).toMatchObject(expected);
  });

  it('ERROR_SENDING-should return new state', () => {
    const action = { payload: { errorSending: 'e' }, type: ERROR_SENDING };
    const newState = transactionReducer(initialState, action);
    const expected = {
      ...initialState,
      errorSending: 'e'
    };
    expect(newState).toMatchObject(expected);
  });
});