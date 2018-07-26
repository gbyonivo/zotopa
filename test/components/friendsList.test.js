import React from 'react';
import renderer from 'react-test-renderer';
import FriendList from '../../src/components/friendsList';

describe('FriendList', () => {
  it('should render correctly', () => {
    const actual = renderer.create(<FriendList friends={[{ name: 'ivo', id: 1 }]}/>);
    expect(actual).toMatchSnapshot();
  });
  it('should render correctly with empty friends', () => {
    const actual = renderer.create(<FriendList friends={[]}/>);
    expect(actual).toMatchSnapshot();
  });
});