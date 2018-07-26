import React from 'react';
import PropTypes from 'prop-types';

const FriendsListItem = ({ friend }) => <div>
  {friend.name}
</div>;

FriendsListItem.propTypes = {
  friend: PropTypes.object.isRequired
};

export default FriendsListItem;