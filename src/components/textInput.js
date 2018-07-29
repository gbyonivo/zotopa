import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextInput = styled.div`
  margin-top: 10px;
  padding: 10px;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  margin: 0 0 5px 5px;
`;

const StyledInput = styled.input`
  width: 98%;
  height: 40px;
  border-radius: 4px;
  border: none;
  box-shadow: 1px 1px 1px #100404;
  text-align: center;
  font-weight: bold;
  display: block;
`;

const StyledErrorSpan = styled.span`
  color: #872a2a;
  font-size: 10px;
  font-weight: lighter;
  font-style: italic;
`;


const TextInput = ({
  value,
  onChange,
  label,
  placeholder,
  name,
  error
}) => <StyledTextInput>
  <StyledLabel htmlFor={name}>{label}</StyledLabel>
  <StyledInput
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value, name)}
    name={name}
  />
  { error && <StyledErrorSpan>{error}</StyledErrorSpan> }
</StyledTextInput>;

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default TextInput;