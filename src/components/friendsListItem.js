import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendsListItem.scss';

const FriendsListItem = ({ friend }) => <li className={styles.friendsListItem}>
  <span>{friend.accountName}</span>
  <span>{friend.accountNumber}</span>
  <span>{friend.sortCode}</span>
</li>;

FriendsListItem.propTypes = {
  friend: PropTypes.object.isRequired
};

export default FriendsListItem;