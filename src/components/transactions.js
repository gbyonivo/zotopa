import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Transaction from './transaction';
import styles from './transactions.scss';
import { selectTransactions } from '../selectors';

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

const mapStateToProps = state => ({
  transactions: selectTransactions(state)
});

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Transactions);