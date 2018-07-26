import { selectErrorSending, selectIsSending } from '../../src/selectors';

const state = {
  personalDetails: {},
  lastTransaction: {},
  friends: [],
  errorSending: null,
  errorFetchingFriends: null,
  errorFetchingPersonalDetails: null,
  isSending: false,
  isFechingPersonalDetails: false,
  isFetchingFriends: false
};

const appState = {
  transactionReducer: state
};

describe('Selector correct select values from app state', () => {
  it('selectErrorSending', () => {
    const actual = selectErrorSending(appState);
    expect(actual).toEqual(null);
  });
  it('selectIsSending', () => {
    const actual = selectIsSending(appState);
    expect(actual).toEqual(false);
  });
});

