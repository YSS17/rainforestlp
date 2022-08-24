import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, Navbarlogo,
         MobileIcon, NavMenu, NavItem, NavLinks } from './navbar'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navbarlogo to="/">🌱 Rainforest</Navbarlogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar