import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Button from '../components/button';
import TextInput from '../components/textInput';
import NumberInput from '../components/numberInput';
import { selectErrorSending, selectIsSending } from '../selectors';
import * as actions from '../actions';

import styles from './sendMoneyForm.scss';

class SendMoneyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountNumber: '',
      accountName: '',
      sortCode: '',
      amount: 0
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value, name) {
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { isSending, send } = this.props;
    const {
      accountName, accountNumber, sortCode, amount
    } = this.state;
    return (<div className={styles.sendMoneyForm}>
      <TextInput
        name="accountName"
        value={accountName}
        label="Account Number"
        placeholder="Ngufan Ivo"
        onChange={this.onChange}
      />
      <TextInput
        name="accountNumber"
        value={accountNumber}
        label="Account Number"
        placeholder="0123456789"
        onChange={this.onChange}
      />
      <TextInput
        name="sortCode"
        value={sortCode}
        label="Sort Code"
        placeholder="22-22-33"
        onChange={this.onChange}
      />
      <NumberInput
        name="amount"
        value={amount}
        label="Amount (£)"
        placeholder="3000"
        onChange={this.onChange}
      />
      <Button
        value="Send Money"
        isLoading={isSending}
        onClick={() => send}
        name="send"
      />
    </div>);
  }
}

SendMoneyForm.propTypes = {
  send: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorSending: PropTypes.string
};

const mapStateToProps = state => ({
  isSending: selectIsSending(state),
  errorSending: selectErrorSending(state)
});

const mapActionsToProps = dispatch => ({
  send: compose(dispatch, actions.send)
});

export default connect(mapStateToProps, mapActionsToProps)(SendMoneyForm);