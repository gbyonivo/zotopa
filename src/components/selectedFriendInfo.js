import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

import styles from './selectedFriendInfo.scss';

const SelectedFriend = ({
  selectedFriend, removeSelection
}) => <div className={styles.selectedFriendInfo} onClick={() => removeSelection()}>
  <label>name</label>
  {selectedFriend.name}
  <label>email</label>
  {selectedFriend.email}
</div>;

SelectedFriend.propTypes = {
  selectedFriend: PropTypes.object.isRequired,
  removeSelection: PropTypes.func.isRequired
};

const mapActionsToProps = dispatch => ({
  removeSelection: compose(dispatch, actions.removeSelection)
});

export default connect(() => ({}), mapActionsToProps)(SelectedFriend);