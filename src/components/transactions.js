import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './transaction';
import styles from './transactions.scss';

const Transactions = ({ transactions }) => <table className={styles.transactions}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Amount</th>
      <th>Date</th>
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
</table>;

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default Transactions;