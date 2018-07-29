import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Transactions from './transactions';

const Span = styled.span`
  display: block;
  font-size: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: bold;
  margin-top: 20px ;
  margin-bottom: 4px;
  padding-left: 4px;
`;

const List = styled.ul`
  list-style-type: none;
`;

const AccountDetails = ({ personalDetails }) => <List>
  <li>
    <Label>Account Name</Label>
    <Span>{personalDetails.name}</Span>
  </li>
  <li>
    <Label>Account Number</Label>
    <Span>{personalDetails.email}</Span>
  </li>
  <li>
    <Label>Availble Funds</Label>
    <Span>£{personalDetails.availableFunds}</Span>
  </li>
  <li>
    <Label>Transactions</Label>
    {
      Object.keys(personalDetails.transactions).length
        ? <Transactions />
        : <Span>No Transactions</Span>
    }
  </li>
</List>;

AccountDetails.propTypes = {
  personalDetails: PropTypes.object.isRequired
};

export default AccountDetails;