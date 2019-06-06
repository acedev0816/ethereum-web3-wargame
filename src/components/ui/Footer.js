import React from 'react';
import styled from 'styled-components';

const Root = styled.footer`
  background-color: #282846;
  color: white;
  text-align: center;
  line-height: 40px;
  height: 40px;
  width: 100%;
  justify-content: center;
  font-size: 0.8rem;
`;

export default () => (
  <Root>developed with X and X by the OpenZeppelin team</Root>
);
