import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import styles from './friendsListItem.scss';

const FriendsListItem = ({ friend, selectFriend }) => <li className={styles.friendsListItem} onClick={() => { selectFriend(friend); }}>
  <span>{friend.name}</span>
  <span>{friend.email}</span>
</li>;

FriendsListItem.propTypes = {
  friend: PropTypes.object.isRequired,
  selectFriend: PropTypes.func.isRequired
};

const mapActionsToProps = dispatch => ({
  selectFriend: compose(dispatch, actions.selectFriend)
});

export default connect(() => ({}), mapActionsToProps)(FriendsListItem);