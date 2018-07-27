import React from 'react';
import PropTypes from 'prop-types';

import styles from './textInput.scss';

const TextInput = ({
  value,
  onChange,
  label,
  placeholder,
  name,
  error
}) => <div className={styles.textInput}>
  <label htmlFor={name}>{label}</label>
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value, name)}
    name={name}
  />
  { error && <span className={styles.error}>{error}</span> }
</div>;

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default TextInput;