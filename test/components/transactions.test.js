import React from 'react';
import { create } from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from '../../src/reducers';
import Transactions from '../../src/components/transactions';

const appState = {
  transactionReducer: {
    personalDetails: {
      3: {
        amount: 10, name: 'ivo', email: '3', date: 'd'
      }
    }
  }
};

describe('Transactions', () => {
  it('should render correctly', () => {
    const actual = create(
      <Provider store={createStore(combineReducers(appState))}>
        <Transactions />
      </Provider>
    );
    expect(actual).toMatchSnapshot();
  });
});