import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({ transaction }) => <tr>
  <td>{transaction.name}</td>
  <td>{transaction.email}</td>
  <td>£{transaction.amount}</td>
  <td>{transaction.date}</td>
</tr>;

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
};

export default Transaction;