import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from '../../src/reducers';
import FriendListMenu from '../../src/containers/friendsListMenu';

const props = {
  fetchFriends: () => {}
};

const transactionReducer = {
  isFetchingFriends: false,
  errorFetchingFriends: null,
  friends: [{ name: 'ivo', id: 3 }, { name: 'goat', id: 4 }]
};

describe('FriendListMenu', () => {
  it('should render component correct', () => {
    const actual = renderer.create(
      <Provider store={createStore(combineReducers({ transactionReducer }))}>
        <FriendListMenu {...props}/>
      </Provider>
    );
    expect(actual).toMatchSnapshot();
  });
});