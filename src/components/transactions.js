import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './transaction';

const Transactions = ({ transactions }) => <ul>
  {
    transactions.map((transaction, index) => <Transaction
      transaction={transaction}
      key={`${transaction.id}${index}`}
    />)
  }
</ul>;

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default Transactions;