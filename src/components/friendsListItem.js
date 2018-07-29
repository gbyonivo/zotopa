import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import * as actions from '../actions';

const StyledFriendsListItem = styled.li`
  margin: 5px 0 0 0;
  height: 30px;
  text-decoration: underline;
  font-weight: bold;
  color: #203535;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  &:hover{
    color: #fff;
  }
`;

const FriendsListItem = ({ friend, selectFriend }) => <StyledFriendsListItem onClick={() => { selectFriend(friend); }}>
  <span>{friend.name}</span>
  <span>{friend.email}</span>
</StyledFriendsListItem>;

FriendsListItem.propTypes = {
  friend: PropTypes.object.isRequired,
  selectFriend: PropTypes.func.isRequired
};

const mapActionsToProps = dispatch => ({
  selectFriend: compose(dispatch, actions.selectFriend)
});

export default connect(() => ({}), mapActionsToProps)(FriendsListItem);