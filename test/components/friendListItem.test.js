import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducer from '../../src/reducers';
import FriendListItem from '../../src/components/friendsListItem';

describe('FriendListItem', () => {
  it('should render correctly', () => {
    const actual = renderer.create(
      <Provider store={createStore(combineReducer({ transactionReducer: {} }))}>
        <FriendListItem friend={{ name: 'ivo', id: 1 }} />
      </Provider>
    );
    expect(actual).toMatchSnapshot();
  });
});