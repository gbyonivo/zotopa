import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectPersonalDetails, selectIsFetchingPersonalDetails, selectErrorFetchingPersonalDetails } from '../selectors';
import * as actions from '../actions';

import styles from './personalDetails.scss';

class PersonalDetails extends Component {
  componentDidMount() {
    this.props.fetchPersonalDetails(1);
  }

  render() {
    const { personalDetails, errorFetching, isFetching } = this.props;
    return (<div className={styles.personalDetails}>
      {
        errorFetching // eslint-disable-line
          ? errorFetching // eslint-disable-line
          : isFetching || !personalDetails.id
            ? 'loading'
            : personalDetails.accountName
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