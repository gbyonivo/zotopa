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
} from '../constants/actionTypes';

export const fetchPersonalDetails = () => ({
  payload: {},
  type: FETCH_PERSONAL_DETAILS
});

export const finishedFetchingPersonalDetails = personalDetails => ({
  payload: { personalDetails },
  type: FINISHED_FETCHING_PERSONAL_DETAILS
});

export const errorFetchingPersonalDetails = error => ({
  payload: {
    errorFetchingPersonalDetails: error
  },
  type: ERROR_FETCHING_PERSONAL_DETAILS
});

export const fetchFriends = () => ({
  payload: {},
  type: FETCH_FRIENDS
});

export const finishedFetchingFriends = friends => ({
  payload: { friends },
  type: FINISHED_FETCHING_FRIENDS
});

export const errorFetchingFriends = error => ({
  payload: {
    errorFetchingFriends: error
  },
  type: ERROR_FETCHING_FRIENDS
});

export const send = () => ({
  payload: {},
  type: SEND
});

export const finishedSending = lastTransactionDetails => ({
  payload: { lastTransactionDetails },
  type: FINISHED_SENDING
});

export const errorSending = error => ({
  payload: {
    errorSending: error
  },
  type: ERROR_SENDING
});