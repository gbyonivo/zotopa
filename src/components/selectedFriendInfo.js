import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import * as actions from '../actions';

const StyledSelectedFriend = styled.div`
  padding: 15px;
  cursor: pointer;
  &:hover{
    background: rgba(255, 0, 0, 0.398);
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 12px;
  margin-top: 10px;
`;

const SelectedFriend = ({
  selectedFriend, removeSelection
}) => <StyledSelectedFriend onClick={() => removeSelection()}>
  <StyledLabel>name</StyledLabel>
  {selectedFriend.name}
  <StyledLabel>email</StyledLabel>
  {selectedFriend.email}
</StyledSelectedFriend>;

SelectedFriend.propTypes = {
  selectedFriend: PropTypes.object.isRequired,
  removeSelection: PropTypes.func.isRequired
};

const mapActionsToProps = dispatch => ({
  removeSelection: compose(dispatch, actions.removeSelection)
});

export default connect(() => ({}), mapActionsToProps)(SelectedFriend);