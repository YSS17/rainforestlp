import React from 'react';
import { FaBars } from 'react-icons/fa';
import {  Nav, NavbarContainer, Navbarlogo, 
          MobileIcon, NavMenu, NavItem, 
          NavLinks, NavBtn, NavBtnLink } from './navbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navbarlogo to="/">Rainforest</Navbarlogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;