import React from 'react';
import PropTypes from 'prop-types';
import { Tr, Td } from 'react-super-responsive-table';


const Transaction = ({ transaction }) => <Tr>
  <Td>{transaction.name}</Td>
  <Td>{transaction.email}</Td>
  <Td>£{transaction.amount}</Td>
  <Td>{transaction.date}</Td>
</Tr>;

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
};

export default Transaction;