import {
  FETCH_PERSONAL_DETAILS,
  FINISHED_FETCHING_PERSONAL_DETAILS,
  ERROR_FETCHING_PERSONAL_DETAILS,
  FINISHED_FETCHING_FRIENDS,
  FETCH_FRIENDS,
  ERROR_FETCHING_FRIENDS,
  ERROR_SENDING,
  SEND,
  FINISHED_SENDING,
  SELECT_FRIEND,
  REMOVE_SELECTION
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

export const send = transaction => ({
  payload: { transaction },
  type: SEND
});

export const finishedSending = lastTransaction => ({
  payload: { lastTransaction },
  type: FINISHED_SENDING
});

export const selectFriend = selectedFriend => ({
  payload: { selectedFriend },
  type: SELECT_FRIEND
});

export const removeSelection = () => ({
  type: REMOVE_SELECTION
});

export const errorSending = error => ({
  payload: {
    errorSending: error
  },
  type: ERROR_SENDING
});