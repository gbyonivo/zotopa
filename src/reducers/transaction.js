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

const ACTION_HANDLERS = {
  [FETCH_PERSONAL_DETAILS]: state => ({
    ...state,
    isFetchingPersonalDetails: true
  }),
  [FINISHED_FETCHING_PERSONAL_DETAILS]: (state, { personalDetails }) => ({
    ...state,
    isFetchingPersonalDetails: false,
    personalDetails
  }),
  [ERROR_FETCHING_PERSONAL_DETAILS]: (state, { errorFetchingPersonalDetails }) => ({
    ...state,
    isFetchingPersonalDetails: false,
    errorFetchingPersonalDetails
  }),
  [FETCH_FRIENDS]: state => ({
    ...state,
    isFetchingFriends: true
  }),
  [FINISHED_FETCHING_FRIENDS]: (state, { friends }) => ({
    ...state,
    isFetchingFriends: false,
    friends
  }),
  [ERROR_FETCHING_FRIENDS]: (state, { errorFetchingFriends }) => ({
    ...state,
    isFetchingFriends: false,
    errorFetchingFriends
  }),
  [SEND]: state => ({
    ...state,
    isSending: true
  }),
  [FINISHED_SENDING]: (state, { lastTransaction }) => ({
    ...state,
    isSending: false,
    lastTransaction,
    personalDetails: {
      ...state.personalDetails,
      transactions: state.personalDetails.transactions.concat(lastTransaction),
      availableFunds: state.personalDetails.availableFunds - lastTransaction.amount
    },
    selectedFriend: {}
  }),
  [ERROR_SENDING]: (state, { errorSending }) => ({
    ...state,
    isSending: false,
    errorSending
  }),
  [SELECT_FRIEND]: (state, { selectedFriend }) => ({
    ...state,
    selectedFriend
  }),
  [REMOVE_SELECTION]: state => ({
    ...state,
    selectedFriend: {}
  }),
};

export default (state = initialState, { type, payload }) => {
  const handler = ACTION_HANDLERS[type];
  return handler ? handler(state, payload) : state;
};