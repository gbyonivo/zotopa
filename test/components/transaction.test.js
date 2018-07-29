import React from 'react';
import { create } from 'react-test-renderer';
import Transaction from '../../src/components/transaction';


describe('Transaction', () => {
  it('should render correctly', () => {
    const actual = create(<Transaction transaction={{ amount: 10, name: 'ivo', email: '3', date: 'd' }}/>);
    expect(actual).toMatchSnapshot();
  });
});