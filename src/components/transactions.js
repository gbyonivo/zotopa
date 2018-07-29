import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Transaction from './transaction';
import { selectTransactions } from '../selectors';

const StyledTransactionTables = styled.table`
  width: calc(100% - 50px);
  background: #666;
  color: #fff;
`;

const HeaderCell = styled.th`
  font-size: 14px;
  background: #ccc;
  color: #000;
`;

const Transactions = ({ transactions }) => <StyledTransactionTables>
  <thead>
    <tr>
      <HeaderCell>Name</HeaderCell>
      <HeaderCell>Email</HeaderCell>
      <HeaderCell>Amount</HeaderCell>
      <HeaderCell>Date</HeaderCell>
    </tr>
  </thead>
  <tbody>
    {
      transactions.map((transaction, index) => <Transaction
        transaction={transaction}
        key={`${transaction.id}${index}`}
      />)
    }
  </tbody>
</StyledTransactionTables>;

const mapStateToProps = state => ({
  transactions: selectTransactions(state)
});

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Transactions);