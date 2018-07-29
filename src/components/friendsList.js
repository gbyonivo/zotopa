import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendsListItem from './friendsListItem';

const StyledNoFriends = styled.div`
  color: red;
  font-weight: bold;
  font-size: 20px;
`;

const StyledFriendsList = styled.ul`
  margin: 0;
  padding: 10px 0 0 10px;
`;

const FriendsList = ({ friends }) => friends.length < 1
  ? <StyledNoFriends>
    No Friends
  </StyledNoFriends>
  : <StyledFriendsList>
    {friends.map(friend => <FriendsListItem friend={friend} key={friend.id}/>)}
  </StyledFriendsList>;

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
};

export default FriendsList;