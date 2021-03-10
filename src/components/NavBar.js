import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import {
  Header,
  LogoNav,
  LogoContainer,
  Logo,
  NavOptions,
  Option,
} from '../styles/navbarStyles';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <Header>
      <LogoNav className='logo-nav'>
        <LogoContainer className='logo-container'>
          <Logo href='#'>Logo</Logo>
        </LogoContainer>
        <NavOptions className={click ? 'nav-options active' : 'nav-options'}>
          <Option className='option mobile-option' onClick={closeMenu}>
            <a href='#'>About</a>
          </Option>
          <Option className='option mobile-option' onClick={closeMenu}>
            <a href='#'>Contact</a>
          </Option>
          <Option className='option mobile-option' onClick={closeMenu}>
            <a href='#'>Projects</a>
          </Option>
        </NavOptions>
      </LogoNav>
      <div className='mobile-menu'>
        {click ? (
          <CloseMenu className='menu-icon' />
        ) : (
          <MenuIcon className='menu-icon' />
        )}
      </div>
    </Header>
  );
};

export default NavBar;
