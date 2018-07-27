import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendsListItem.scss';

const FriendsListItem = ({ friend }) => <li className={styles.friendsListItem}>
  <span>{friend.name}</span>
  <span>{friend.email}</span>
</li>;

FriendsListItem.propTypes = {
  friend: PropTypes.object.isRequired
};

export default FriendsListItem;