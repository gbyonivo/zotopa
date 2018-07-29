import React from 'react';
import { create } from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducer from '../../src/reducers';
import SelectedFriendInfo from '../../src/components/selectedFriendInfo';

describe('SelectedFriendInfo', () => {
  it('should render correctly', () => {
    const actual = create(
      <Provider store={createStore(combineReducer({ transactionReducer: {} }))}>
        <SelectedFriendInfo selectedFriend={{ name: 'ivo', email: '3' }} removeSelection={() => {}} />
      </Provider>
    );
    expect(actual).toMatchSnapshot();
  });
});