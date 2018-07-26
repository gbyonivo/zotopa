import React from 'react';
import PropTypes from 'prop-types';
import FriendsListItem from './friendsListItem';

const FriendsList = ({ friends }) => friends.length < 1
  ? <div>No Friends</div>
  : <ul>
    {friends.map(friend => <FriendsListItem friend={friend} key={friend.id}/>)}
  </ul>;

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
};

export default FriendsList;