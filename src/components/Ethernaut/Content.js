import { Root, Wrapper } from './Content.css';

import Header from '../ui/Header';
import React from 'react';

const Content = ({ children }) => {
  return (
    <Root>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </Root>
  );
};

export default Content;
