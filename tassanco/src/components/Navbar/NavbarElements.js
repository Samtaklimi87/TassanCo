import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import COL from "../Colors";

export const Nav = styled.nav`
  background: ${COL.navBackgroundColor};
  height: 80px;
  // margin-top: -80px;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1rem;
  position: stikcy;
  position: -webkit-sticky;
  top: 0; /* required */
  z-index: 10;
  // padding: 0.5rem calc((100vw - 1000px) / 2);

  @media screen and(max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color :  ${COL.logoTextColor};
  //color: #fff;
  justify-content: flex-start;
  display: flex;
  cursor: pointer;
  font-size: 1.5 rem;
  align-items: center;
  marginr-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8 rem;
    cursor: pointer;
   // color: #fff;
   color: ${COL.iconColro};
  }
`;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${COL.iconColro};
    //color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -22px;
  list-style: none;
  tetx-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  color: ${COL.navLinkTextColor};
  // color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;

  &.active {
    // color: #15cdfc;
    border-bottom: 3px solid ${COL.activeColor};
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  // margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${COL.btnPrimaryColor};
  // background: #01bf71;
  white-space: nowarp;
  padding: 10px 22px;
  color: ${COL.btnNavTextColor};
  // color: #010606;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  // margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${COL.btnHoverColor};
    color: ${COL.btnInfoColor};
    // background: #fff;
    //color: #010606;
  }
`;