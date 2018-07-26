import {
  fetchFriends,
  fetchPersonalDetails,
  send,
  errorFetchingFriends,
  errorSending,
  errorFetchingPersonalDetails,
  finishedFetchingFriends,
  finishedSending,
  finishedFetchingPersonalDetails
} from '../../src/actions';

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

describe('fetchFriends', () => {
  it('should return fetchFriends action', () => {
    const actual = fetchFriends();
    const expected = {
      type: FETCH_FRIENDS
    };
    expect(actual).toMatchObject(expected);
  });
});

describe('fetchPersonalDetails', () => {
  it('should return fetchPersonalDetails action', () => {
    const actual = fetchPersonalDetails();
    const expected = {
      type: FETCH_PERSONAL_DETAILS
    };
    expect(actual).toMatchObject(expected);
  });
});

describe('send', () => {
  it('should return send action', () => {
    const actual = send(1, 2000);
    const expected = {
      type: SEND,
      payload: {
        friendId: 1,
        amount: 2000
      }
    };
    expect(actual).toMatchObject(expected);
  });
});

describe('errorFetchingFriends', () => {
  it('should return errorFetchingFriends action', () => {
    const actual = errorFetchingFriends('e');
    const expected = {
      type: ERROR_FETCHING_FRIENDS,
      payload: {
        errorFetchingFriends: 'e'
      }
    };
    expect(actual).toMatchObject(expected);
  });
});

describe('errorFetchingPersonalDetails', () => {
  it('should return errorFetchingPersonalDetails action', () => {
    const actual = errorFetchingPersonalDetails('e');
    const expected = {
      type: ERROR_FETCHING_PERSONAL_DETAILS,
      payload: {
        errorFetchingPersonalDetails: 'e'
      }
    };
    expect(actual).toMatchObject(expected);
  });
});

describe('errorSending', () => {
  it('should return errorSending action', () => {
    const actual = errorSending('e');
    const expected = {
      type: ERROR_SENDING,
      payload: {
        errorSending: 'e'
      }
    };
    expect(actual).toMatchObject(expected);
  });
});

describe('finishedFetchingFriends', () => {
  it('should return finishedFetchingFriends action', () => {
    const actual = finishedFetchingFriends([1]);
    const expected = {
      type: FINISHED_FETCHING_FRIENDS,
      payload: {
        friends: [1]
      }
    };
    expect(actual).toMatchObject(expected);
  });
});

describe('finishedFetchingPersonalDetails', () => {
  it('should return finishedFetchingPersonalDetails action', () => {
    const actual = finishedFetchingPersonalDetails({ id: 1 });
    const expected = {
      type: FINISHED_FETCHING_PERSONAL_DETAILS,
      payload: {
        personalDetails: { id: 1 }
      }
    };
    expect(actual).toMatchObject(expected);
  });
});

describe('finishedSending', () => {
  it('should return finishedSending action', () => {
    const actual = finishedSending('lt');
    const expected = {
      type: FINISHED_SENDING,
      payload: {
        lastTransaction: 'lt'
      }
    };
    expect(actual).toMatchObject(expected);
  });
});