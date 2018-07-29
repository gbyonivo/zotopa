import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'; // eslint-disable-line
import Transaction from './transaction';
import { selectTransactions } from '../selectors';

const Transactions = ({ transactions }) => <Table>
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Email</Th>
      <Th>Amount</Th>
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
  transactions: selectTransactions(state)
});

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Transactions);