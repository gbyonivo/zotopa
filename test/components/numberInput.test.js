import React from 'react';
import renderer from 'react-test-renderer';
import NumberInput from '../../src/components/textInput';

describe('NumberInput component', () => {
  it('TextInput renders correctly', () => {
    const actual = renderer.create(
      <NumberInput
        value={0}
        label="play"
        name="play"
        placeholder="play"
        onChange={() => {}}
      />
    );
    expect(actual).toMatchSnapshot();
  });
});
