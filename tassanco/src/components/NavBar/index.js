import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/gallery' activeStyle>
            Gallery 
          </NavLink>
          <NavLink to='/about' activeStyle>
            About Us 
          </NavLink>
          <NavLink to='/teams' activeStyle>
            Teams
          </NavLink>
    
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/contact'>Contact Us</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;