import { Item, Menu, Root } from './Header.css';

import Logo from './Logo';
import React from 'react';

const Header = () => {
  return (
    <Root>
      <Logo />
      <Menu>
        <Item>Forum</Item>
        <Item>About</Item>
        <Item>Help</Item>
      </Menu>
    </Root>
  );
};

export default Header;
