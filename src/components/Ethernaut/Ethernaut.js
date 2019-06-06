import { Root, Wrapper } from './Ethernaut.css';

import Content from './Content';
import Footer from '../ui/Footer';
import React from 'react';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <Root>
      <Wrapper>
        <Sidebar />
        <Content>Content</Content>
      </Wrapper>
      <Footer />
    </Root>
  );
};

export default Home;
