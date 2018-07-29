import React from 'react';
import PropTypes from 'prop-types';
import styles from './accountDetails.scss';
import Transactions from './transactions';

const AccountDetails = ({ personalDetails }) => <ul className={styles.accountDetails}>
  <li className={styles.accountDetailsItem}>
    <label>Account Name</label>
    <span className={styles.accountDetailsItemContent}>{personalDetails.name}</span>
  </li>
  <li className={styles.accountDetailsItem}>
    <label>Account Number</label>
    <span className={styles.accountDetailsItemContent}>{personalDetails.email}</span>
  </li>
  <li className={styles.accountDetailsItem}>
    <label>Availble Funds</label>
    <span className={styles.accountDetailsItemContent}>£{personalDetails.availableFunds}</span>
  </li>
  <li className={styles.accountDetailsItem}>
    <label>Transactions</label>
    {
      Object.keys(personalDetails.transactions).length
        ? <Transactions/>
        : <span className={styles.accountDetailsItemContent}>No Transactions</span>
    }
  </li>
</ul>;

AccountDetails.propTypes = {
  personalDetails: PropTypes.object.isRequired
};

export default AccountDetails;