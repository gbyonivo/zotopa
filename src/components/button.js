import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  height: 40px;
  margin: 10px;
`;

const StyledButton = styled.button`
  height: 40px;
  width: 98%;
  background-image: linear-gradient(rgba(71, 160, 50, 0), #aeb4b0);
  border: none;
  font-weight: bold;
  color: #000;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    min-width: 150px;
  }
  @media screen and (min-width: 615px) {
    width: 200px;
  }
`;

const Button = ({
  isLoading,
  onClick,
  name,
  value
}) => <Div>
  {
    !isLoading
      ? <StyledButton onClick={onClick} disabled={isLoading} name={name}>
        {value}
      </StyledButton>
      : <span>Sending...</span>
  }
</Div>;

Button.propTypes = {
  isLoading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;