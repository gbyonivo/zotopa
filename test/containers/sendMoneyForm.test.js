import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SendMoneyForm from '../../src/containers/sendMoneyForm';
import combineReducers from '../../src/reducers';

const props = {
  send: () => { }
};

const transactReducer = {
  errorSending: null,
  isSending: true
};

describe('SendMoneyForm', () => {
  it('should render correctly', () => {
    const actual = renderer.create(
      <Provider store={createStore(combineReducers({ transactReducer }))}>
        <SendMoneyForm {...props} />
      </Provider>
    );
    expect(actual).toMatchSnapshot();
  });
});