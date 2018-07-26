import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from '../../src/components/textInput';

describe('TextInput component', () => {
  it('TextInput renders correctly', () => {
    const actual = renderer.create(
      <TextInput
        value="play"
        label="play"
        name="play"
        placeholder="play"
        onChange={() => {}}
      />
    );
    expect(actual).toMatchSnapshot();
  });
});
