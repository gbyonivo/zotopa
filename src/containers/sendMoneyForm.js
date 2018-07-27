import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import Button from '../components/button';
import NumberInput from '../components/numberInput';
import SelectedFriendInfo from '../components/selectedFriendInfo';
import { selectErrorSending, selectIsSending, selectSelectedFriend } from '../selectors';
import * as actions from '../actions';

import styles from './sendMoneyForm.scss';
import UserDetailsForm from '../components/friendInfoForm';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedFriend.email) {
      this.setState(() => ({
        ...nextProps.selectedFriend
      }));
    }
  }

  onChange(value, name) {
    this.setState(() => ({ [name]: value }));
  }

  sendMoney() {
    this.props.send({ ...this.state, date: dateFns.format(new Date(), 'YYYY-MM-DD HH:mm') });
  }

  render() {
    const { isSending, selectedFriend } = this.props;
    const { email, name, amount } = this.state;
    return (<div className={styles.sendMoneyForm}>
      <h2>Send Money</h2>
      {
        !selectedFriend.email
          ? <UserDetailsForm email={email} name={name} onChange={this.onChange} />
          : <SelectedFriendInfo selectedFriend={selectedFriend} />
      }
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
  selectedFriend: PropTypes.object.isRequired,
  errorSending: PropTypes.string
};

const mapStateToProps = state => ({
  isSending: selectIsSending(state),
  errorSending: selectErrorSending(state),
  selectedFriend: selectSelectedFriend(state)
});

const mapActionsToProps = dispatch => ({
  send: compose(dispatch, actions.send)
});

export default connect(mapStateToProps, mapActionsToProps)(SendMoneyForm);