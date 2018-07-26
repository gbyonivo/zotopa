import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from '../../src/reducers';
import PersonalDetails from '../../src/containers/personalDetails';


const props = {
  fetchPersonalDetails: () => {}
};

const transactionReducer = {
  isFetchingPersonalDetails: false,
  errorFetchingPersonalDetails: 'I am just being lazy',
  personalDetails: {
    name: 'Ivo'
  }
};

describe('PersonalDetails Component', () => {
  it('should render correctly', () => {
    const actual = renderer.create(
      <Provider store={createStore(combineReducers({ transactionReducer }))}>
        <PersonalDetails {...props}/>
      </Provider>
    );
    expect(actual).toMatchSnapshot()
  });
});