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

export const fetchFriends = userId => ({
  type: FETCH_FRIENDS,
  payload: { userId }
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

export const send = (friendId, amount) => ({
  payload: { friendId, amount },
  type: SEND
});

export const finishedSending = lastTransaction => ({
  payload: { lastTransaction },
  type: FINISHED_SENDING
});

export const errorSending = error => ({
  payload: {
    errorSending: error
  },
  type: ERROR_SENDING
});