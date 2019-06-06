import { Root, Wrapper } from './Ethernaut.css';

import Content from './Content';
import Footer from '../ui/Footer';
import React from 'react';
import Sidebar from './Sidebar';

const Home = ({ children }) => {
  return (
    <Root>
      <Wrapper>
        <Sidebar />
        <Content>{children}</Content>
      </Wrapper>
      <Footer />
    </Root>
  );
};

export default Home;
