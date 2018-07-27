import React from 'react';
import PropTypes from 'prop-types';
import styles from './accountDetails.scss';
import Transactions from './transactions';

const AccountDetails = ({ personalDetails }) => <ul className={styles.accountDetails}>
  <li className={styles.accountDetailsItem}>
    <label>Account Name</label>
    <span>{personalDetails.name}</span>
  </li>
  <li className={styles.accountDetailsItem}>
    <label>Account Number</label>
    <span>{personalDetails.email}</span>
  </li>
  <li className={styles.accountDetailsItem}>
    <label>Availble Funds</label>
    <span>{personalDetails.availableFunds}</span>
  </li>
  <li className={styles.accountDetailsItem}>
    <label>Transaction</label>
    <Transactions transactions={personalDetails.transactions}/>
  </li>
</ul>;

AccountDetails.propTypes = {
  personalDetails: PropTypes.object.isRequired
};

export default AccountDetails;