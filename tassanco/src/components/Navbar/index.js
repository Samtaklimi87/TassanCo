import react from "react"
import { Nav ,NavLink , Bars , NavMenu , NavBtn, NavBtnLink,NavbarContainer,NavLogo ,MobileIcon,NavItem}   from "./NavbarElements"
import logo from "../../images/tassan-logo1.jpg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <Nav> 
                <NavbarContainer>
                    <NavLogo to='/'> somelogo </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>    
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/about" activeStyle>About 1 </NavLink>
                        </NavItem>   
                        <NavItem>
                            <NavLink to="/about2" activeStyle>About 2 </NavLink>
                        </NavItem> 
                        <NavItem>
                             <NavLink to="/about3" activeStyle>About 3</NavLink>
                        </NavItem>        
                        <NavItem>
                            <NavLink to="/about4" activeStyle>
                                About 4
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtnLink to="/signin">Sign in</NavBtnLink>


                                            
                </NavbarContainer>
            </Nav>



        </>
    );
};

export default Navbar ;

