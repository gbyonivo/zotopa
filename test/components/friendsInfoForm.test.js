import React from 'react';
import { create } from 'react-test-renderer';
import FriendsInfoForm from '../../src/components/friendInfoForm';

describe('FriendsInfoForm', () => {
  it('should render correctly', () => {
    const actual = create(<FriendsInfoForm
      name = "barry"
      email = "milner@gmail.com"
      onChange={() => {}}
      emailError="email error"
      nameError="name error"
    />);
    expect(actual).toMatchSnapshot();
  });
});