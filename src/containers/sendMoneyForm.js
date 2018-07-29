import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import Button from '../components/button';
import NumberInput from '../components/numberInput';
import SelectedFriendInfo from '../components/selectedFriendInfo';
import {
  selectErrorSending,
  selectIsSending,
  selectSelectedFriend,
  selectAvailableFunds
} from '../selectors';
import * as actions from '../actions';
import UserDetailsForm from '../components/friendInfoForm';
import { validateForm } from '../functions/validation';

const initialState = {
  name: '',
  email: '',
  amount: 0,
  amountError: null,
  nameError: null,
  emailError: null
};

class SendMoneyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.onChange = this.onChange.bind(this);
    this.sendMoney = this.sendMoney.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedFriend.email) {
      this.setState(() => ({ ...nextProps.selectedFriend }));
    }
  }

  onChange(value, name) {
    this.setState(() => ({ [name]: value, [`${name}Error`]: null }));
  }

  sendMoney() {
    const { amountError, nameError, emailError } = validateForm(this.state, this.props.availableFunds);
    if (amountError || nameError || emailError) {
      this.setState(() => ({ amountError, nameError, emailError }));
      return;
    }
    this.props.send(
      { ...this.state, date: dateFns.format(new Date(), 'YYYY-MM-DD HH:mm') },
      this.props.availableFunds - this.state.amount
    );
    this.setState(() => initialState);
  }

  render() {
    const { isSending, selectedFriend } = this.props;
    const {
      email, name, amount, amountError, nameError, emailError
    } = this.state;
    return (<div>
      <h2>Send Money</h2>
      {
        !selectedFriend.email
          ? <UserDetailsForm
            email={email}
            name={name}
            onChange={this.onChange}
            nameError={nameError}
            emailError={emailError}
          />
          : <SelectedFriendInfo selectedFriend={selectedFriend}/>
      }
      <NumberInput
        name="amount"
        value={`${amount}`}
        label="Amount (£)"
        placeholder="3000"
        onChange={this.onChange}
        error={amountError}
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
  selectedFriend: PropTypes.object.isRequired,
  errorSending: PropTypes.string,
  availableFunds: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  isSending: selectIsSending(state),
  errorSending: selectErrorSending(state),
  selectedFriend: selectSelectedFriend(state),
  availableFunds: selectAvailableFunds(state)
});

const mapActionsToProps = dispatch => ({
  send: compose(dispatch, actions.send)
});

export default connect(mapStateToProps, mapActionsToProps)(SendMoneyForm);