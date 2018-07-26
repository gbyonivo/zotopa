import React from 'react';
import PropTypes from 'prop-types';

const AccountDetails = ({ personalDetails }) => <ul>
  <li>
    <label>Account Name</label>
    <span>{personalDetails.accountName}</span>
  </li>
  <li>
    <label>Account Number</label>
    <span>{personalDetails.accountNumber}</span>
  </li>
  <li>
    <label>Sort Code</label>
    <span>{personalDetails.sortCode}</span>
  </li>
  <li>
    <label>Address</label>
    <span>{personalDetails.accountName}</span>
  </li>
  <li>
    <label>Amount</label>
    <span>{personalDetails.amount}</span>
  </li>
  <li>
    <label>Transaction</label>
    <span>{personalDetails.accountName}</span>
  </li>
</ul>;

AccountDetails.propTypes = {
  personalDetails: PropTypes.object.isRequired
};

export default AccountDetails;