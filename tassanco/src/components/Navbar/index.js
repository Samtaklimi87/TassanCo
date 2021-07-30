import react from "react"
import { Nav ,NavLink , Bars , NavMenu , NavBtn, NavBtnLink }   from "./NavbarElements"


const Navbar = () => {
    return (
        <>
            <Nav> 
                <NavLink to="/">
                    <h1 id='logofont'>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About 1
                    </NavLink>
                    <NavLink to="/about2" activeStyle>
                        About 2
                    </NavLink>
                    <NavLink to="/about3" activeStyle>
                        About 3
                    </NavLink>
                    <NavLink to="/about4" activeStyle>
                        About 4
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign in</NavBtnLink>
                </NavBtn>
            </Nav>

        </>
    )
}

export default Navbar 