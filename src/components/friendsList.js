import React from 'react';
import PropTypes from 'prop-types';
import FriendsListItem from './friendsListItem';
import styles from './friendsList.scss';

const FriendsList = ({ friends }) => friends.length < 1
  ? <div className={styles.noFriends}>No Friends</div>
  : <ul className={styles.friendsList}>
    {friends.map(friend => <FriendsListItem friend={friend} key={friend.id}/>)}
  </ul>;

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
};

export default FriendsList;