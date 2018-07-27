import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({ transaction }) => <li>
  <span>{transaction.name}</span>
  <span>{transaction.email}</span>
  <span>{transaction.amount}</span>
  <span>{transaction.date}</span>
</li>;

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired
};

export default Transaction;