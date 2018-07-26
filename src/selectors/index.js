export const selectIsSending = ({ transactionReducer: { isSending } }) => isSending;

export const selectErrorSending = ({ transactionReducer: { errorSending } }) => errorSending;