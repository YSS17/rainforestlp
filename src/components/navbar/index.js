import React from 'react';
import { Nav,NavbarContainer,Navbarlogo } from './navbar'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navbarlogo to="/">🌱Rainforest</Navbarlogo>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar