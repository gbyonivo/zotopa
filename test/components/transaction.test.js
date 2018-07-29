import React from 'react';
import { shallow } from 'enzyme';
import Transaction from '../../src/components/transaction';


describe('Transaction', () => {
  it('should render correctly', () => {
    const actual = shallow(<Transaction transaction={{ amount: 10, name: 'ivo', email: '3', date: 'd' }}/>);
    expect(actual).toMatchSnapshot();
  });
});