import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
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
      name: '',
      email: '',
      amount: 0
    };
    this.onChange = this.onChange.bind(this);
    this.sendMoney = this.sendMoney.bind(this);
  }

  onChange(value, name) {
    this.setState(() => ({ [name]: value }));
  }

  sendMoney() {
    this.props.send({ ...this.state, date: dateFns.format(new Date(), 'YYYY-MM-DD HH:mm') });
  }

  render() {
    const { isSending } = this.props;
    const {
      email, name, amount
    } = this.state;
    return (<div className={styles.sendMoneyForm}>
      <h2>Send Money</h2>
      <TextInput
        name="name"
        value={name}
        label="Name"
        placeholder="Ngufan Ivo"
        onChange={this.onChange}
      />
      <TextInput
        name="email"
        value={email}
        label="E-mail"
        placeholder="orkumaivo@gmail.com"
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
        onClick={this.sendMoney}
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