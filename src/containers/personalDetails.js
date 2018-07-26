import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectPersonalDetails, selectIsFetchingPersonalDetails, selectErrorFetchingPersonalDetails } from '../selectors';
import * as actions from '../actions';
import styles from './personalDetails.scss';
import AccountDetails from '../components/accountDetails';
import Loading from '../components/loading';

class PersonalDetails extends Component {
  componentDidMount() {
    this.props.fetchPersonalDetails(1);
  }

  render() {
    const { personalDetails, errorFetching, isFetching } = this.props;
    return (<div className={styles.personalDetails}>
      <h2>Personal Account Details</h2>
      {
        errorFetching // eslint-disable-line
          ? errorFetching // eslint-disable-line
          : isFetching || !personalDetails.id
            ? <Loading/>
            : <AccountDetails personalDetails={personalDetails}/>
      }
    </div>);
  }
}

PersonalDetails.propTypes = {
  personalDetails: PropTypes.object.isRequired,
  errorFetching: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  fetchPersonalDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  personalDetails: selectPersonalDetails(state),
  isFetching: selectIsFetchingPersonalDetails(state),
  errorFetching: selectErrorFetchingPersonalDetails(state),
});

const mapActionsToProps = dispatch => ({
  fetchPersonalDetails: compose(dispatch, actions.fetchPersonalDetails)
});

export default connect(mapStateToProps, mapActionsToProps)(PersonalDetails);