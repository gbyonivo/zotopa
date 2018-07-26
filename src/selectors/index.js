export const selectIsSending = ({ transactionReducer: { isSending } }) => isSending;

export const selectErrorSending = ({ transactionReducer: { errorSending } }) => errorSending;

export const selectPersonalDetails = ({ transactionReducer: { personalDetails } }) => personalDetails;

export const selectIsFetchingPersonalDetails = ({ transactionReducer: { isFetchingPersonalDetails } }) => isFetchingPersonalDetails;

export const selectErrorFetchingPersonalDetails = ({ transactionReducer: { errorFetchingPersonalDetails } }) => errorFetchingPersonalDetails;

export const selectFriends = ({ transactionReducer: { friends } }) => friends;

export const selectIsFetchingFriends = ({ transactionReducer: { isFetchingFriends } }) => isFetchingFriends;

export const selectErrorFetchingFriends = ({ transactionReducer: { errorFetchingFriends } }) => errorFetchingFriends;
