import React from 'react';
import PropTypes from 'prop-types';

import styles from './numberInput.scss';

const NumberInput = ({
  value,
  onChange,
  label,
  placeholder,
  name,
  error
}) => <div className={styles.numberInput}>
  <label htmlFor={name}>{label}</label>
  <input
    type="number"
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value, name)}
    name={name}
  />
  { error && <span className={styles.error}>{error}</span> }
</div>;

NumberInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default NumberInput;