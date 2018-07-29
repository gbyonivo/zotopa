import React from 'react';
import { create } from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from '../../src/reducers';
import AccountDetails from '../../src/components/accountDetails';

const appState = {
  transactionReducer: {
    personalDetails: {
      3: {
        amount: 10, name: 'ivo', email: '3', date: 'd'
      }
    }
  }
};

describe('AccountDetails', () => {
  it('should render correctly with empty transactions', () => {
    const actual = create(
      <Provider store={createStore(combineReducers(appState))}>
        <AccountDetails personalDetails={{
          name: 'Ivo',
          email: 'io@io.com',
          availableFunds: '100000',
          transactions: []
        }} />
      </Provider>
    );
    expect(actual).toMatchSnapshot();
  });
  it('should render correctly with transactions', () => {
    const actual = create(
      <Provider store={createStore(combineReducers(appState))}>
        <AccountDetails personalDetails={{
          name: 'Ivo',
          email: 'io@io.com',
          availableFunds: '100000',
          transactions: [{
            amount: 10, name: 'ivo', email: '3', date: 'd'
          }]
        }} />
      </Provider>
    );
    expect(actual).toMatchSnapshot();
  });
});