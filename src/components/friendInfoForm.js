import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './textInput';

const UserDetailsForm = ({
  name, email, onChange, emailError, nameError
}) => <div>
  <TextInput
    name="name"
    value={name}
    label="Name"
    placeholder="Ngufan Ivo"
    error={nameError}
    onChange={onChange}
  />
  <TextInput
    name="email"
    value={email}
    label="E-mail"
    placeholder="orkumaivo@gmail.com"
    onChange={onChange}
    error={emailError}
  />
</div>;

UserDetailsForm.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  emailError: PropTypes.string,
  nameError: PropTypes.string
};

export default UserDetailsForm;