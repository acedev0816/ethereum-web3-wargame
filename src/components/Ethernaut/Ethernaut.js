import { Footer, Header } from '../ui';
import { Main, Root, Wrapper } from './Ethernaut.css';

import ConsoleDetect from './ConsoleDetect';
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
          <ConsoleDetect />
        </Main>
      </Wrapper>
      <Footer />
    </Root>
  );
};

export default Home;
