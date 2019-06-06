import { Footer, Header, Page } from '../ui';
import { Main, Root, Wrapper } from './Ethernaut.css';

import React from 'react';
import Sidebar from './Sidebar';

const Home = ({ children }) => {
  return (
    <Root>
      <Wrapper>
        <Sidebar />
        <Main>
          <Header />
          <>{children}</>
        </Main>
      </Wrapper>
      <Footer />
    </Root>
  );
};

export default Home;
