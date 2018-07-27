import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './textInput';

const UserDetailsForm = ({
  name, email, onChange
}) => <div>
  <TextInput
    name="name"
    value={name}
    label="Name"
    placeholder="Ngufan Ivo"
    onChange={onChange}
  />
  <TextInput
    name="email"
    value={email}
    label="E-mail"
    placeholder="orkumaivo@gmail.com"
    onChange={onChange}
  />
</div>;

UserDetailsForm.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
};

export default UserDetailsForm;