import React from 'react';
import PropTypes from 'prop-types';

const SelectedFriend = ({
  selectedFriend
}) => <div>
  <label>name</label>
  {selectedFriend.name}
  <label>email</label>
  {selectedFriend.email}
</div>;

SelectedFriend.propTypes = {
  selectedFriend: PropTypes.object.isRequired
};

export default SelectedFriend;