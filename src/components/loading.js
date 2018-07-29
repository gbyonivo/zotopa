import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
  display: inline-block;
  width: 73px;
  height: 64px;
  margin-top: 50%;
  margin-left: 43%;
  &::after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #3366CC;
    border-color: #3366CC transparent #3366CC transparent;
    animation: loading 1.2s linear infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => <StyledLoading/>;

export default Loading;
