import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectErrorFetchingFriends, selectFriends, selectIsFetchingFriends } from '../selectors';
import * as actions from '../actions';
import FriendsList from '../components/friendsList';
import Loading from '../components/loading';

class FriendsListMenu extends Component {
  componentDidMount() {
    this.props.fetchFriends(4);
  }

  render() {
    const { friends, errorFetching, isFetching } = this.props;
    return (<div className="friendsListMenu">
      <h2>Saved Friends</h2>
      {
        errorFetching // eslint-disable-line
          ? errorFetching // eslint-disable-line
          : isFetching
            ? <Loading/>
            : <FriendsList friends={friends}/>
      }
    </div>);
  }
}

FriendsListMenu.propTypes = {
  errorFetching: PropTypes.string,
  friends: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchFriends: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  friends: selectFriends(state),
  isFetching: selectIsFetchingFriends(state),
  errorFetching: selectErrorFetchingFriends(state)
});

const mapActionsToProps = dispatch => ({
  fetchFriends: compose(dispatch, actions.fetchFriends)
});

export default connect(mapStateToProps, mapActionsToProps)(FriendsListMenu);