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
  NavLogoLink,
  NavItem,
} from "./NavbarElements";
import logo from "../../images/tassan-logo1.jpg";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoLink smooth={true} duration={1000} spy={true} to="home"> somelogo </NavLogoLink>
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
              <NavLink smooth={true} duration={1000} spy={true} to="id2" >
                Second Page comes here ! 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth={true} duration={1000} spy={true} to="id3" >
                Third Page comes here !!
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth={true} duration={1000} spy={true} to="services">
                Services
              </NavLink>
            </NavItem>
            <NavBtn>
                <NavBtnLink
                  onClick={() => {
                      console.log("pressed");
                  }} 
                  to="/signin"
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
