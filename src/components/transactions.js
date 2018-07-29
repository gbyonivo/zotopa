import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'; // eslint-disable-line
import Transaction from './transaction';
import { selectTransactions } from '../selectors';

const Transactions = ({ transactions, total }) => <Table>
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Email</Th>
      <Th>Amount (total - £{total})</Th>
      <Th>Date</Th>
    </Tr>
  </Thead>
  <Tbody>
    {
      transactions.map((transaction, index) => <Transaction
        transaction={transaction}
        key={`${transaction.id}${index}`}
      />)
    }
  </Tbody>
</Table>;

const mapStateToProps = state => ({
  transactions: selectTransactions(state),
  total: selectTransactions(state).reduce((acc, current) => acc + parseFloat(current.amount, 10), 0)
});

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Transactions);