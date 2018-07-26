import React from 'react';
import PropTypes from 'prop-types';

import styles from './numberInput.scss';

const NumberInput = ({
  value,
  onChange,
  label,
  placeholder,
  name
}) => <div className={styles.numberInput}>
  <label htmlFor={name}>{label}</label>
  <input
    type="number"
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value, name)}
    name={name}
  />
</div>;

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default NumberInput;