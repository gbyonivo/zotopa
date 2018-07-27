import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducer from '../../src/reducers';
import FriendList from '../../src/components/friendsList';

describe('FriendList', () => {
  it('should render correctly', () => {
    const actual = renderer.create(
      <Provider store={createStore(combineReducer({ transactionReducer: {} }))}>
        <FriendList friends={[{ name: 'ivo', id: 1 }]} />
      </Provider>
    );
    expect(actual).toMatchSnapshot();
  });
  it('should render correctly with empty friends', () => {
    const actual = renderer.create(<FriendList friends={[]} />);
    expect(actual).toMatchSnapshot();
  });
});