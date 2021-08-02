import react from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
} from "./NavbarElements";
import logo from "../../images/tassan-logo1.jpg";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> somelogo </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink smooth={true} duration={1000} spy={true} to="about">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth={true} duration={1000} spy={true} to="/id2" activeStyle>
                First Page comes here ! 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth={true} duration={1000} spy={true} to="/id3" activeStyle>
                Second Page comes here !!
              </NavLink>
            </NavItem>
            
            <NavBtn>
                <NavBtnLink
                  onClick={() => {
                      console.log("pressed");
                  }} 
                  to="/page2"
                  >
                     Click Here 
                </NavBtnLink>
            </NavBtn>
          </NavMenu>

          {/* <NavBtnLink to="/signin">Sign in</NavBtnLink> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
