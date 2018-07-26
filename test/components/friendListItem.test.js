import React from 'react';
import renderer from 'react-test-renderer';
import FriendListItem from '../../src/components/friendsListItem';

describe('FriendListItem', () => {
  it('should render correctly', () => {
    const actual = renderer.create(<FriendListItem friend={{ name: 'ivo', id: 1 }}/>);
    expect(actual).toMatchSnapshot();
  });
});