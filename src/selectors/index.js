export const selectIsSending = ({ transactionReducer: { isSending } }) => isSending;

export const selectErrorSending = ({ transactionReducer: { errorSending } }) => errorSending;

export const selectPersonalDetails = ({ transactionReducer: { personalDetails } }) => personalDetails;

export const selectTransactions = ({ transactionReducer: { personalDetails } }) => [...(Object.values(personalDetails.transactions || {}))].reverse();

export const selectIsFetchingPersonalDetails = ({ transactionReducer: { isFetchingPersonalDetails } }) => isFetchingPersonalDetails;

export const selectErrorFetchingPersonalDetails = ({ transactionReducer: { errorFetchingPersonalDetails } }) => errorFetchingPersonalDetails;

export const selectFriends = ({ transactionReducer: { friends } }) => friends;

export const selectSelectedFriend = ({ transactionReducer: { selectedFriend } }) => selectedFriend;

export const selectIsFetchingFriends = ({ transactionReducer: { isFetchingFriends } }) => isFetchingFriends;

export const selectErrorFetchingFriends = ({ transactionReducer: { errorFetchingFriends } }) => errorFetchingFriends;

export const selectAvailableFunds = ({ transactionReducer: { personalDetails } }) => parseFloat(personalDetails.availableFunds, 10);
