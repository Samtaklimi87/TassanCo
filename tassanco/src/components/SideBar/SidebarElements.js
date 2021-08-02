import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import COL from "../Colors";

export const SidebarContainer = styled.aside`
display: none;

    @media screen and (max-width: 768px) {
      position: fixed;
      // z-index: 999;
      z-index: ${({ isOpen }) => (isOpen ? "999" : "0")};
      width: 100%;
      height: 110%;
      background: ${COL.sideBarBackgroundColor};
      display: grid;
      align-items: center;
      left: 0;
      transition: 0.3s ease-in-out;     
      opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
      top: : ${({ isOpen }) => (isOpen ? "0" : "-100%")}; 
    }
`;

export const CloseIcon = styled(FaTimes)`
  color: ${COL.iconColro};
  // color: #fff;
`;

export const Icon = styled.div`
  position: fixed;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${COL.sideBarTextColor};
  //color: #fff;
  cursor: pointer;

  &:hover {
    color: ${COL.sideBarTextHoverColor};
    //color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${COL.btnPrimaryColor};
  // background: #01bf71;
  white-space: nowarp;
  padding: 16px 64px;
  color: ${COL.btnTextInfoColor};
  // color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${COL.sideBarBtnHover};
    color: ${COL.btnTextInfoColor};
    // background: #fff;
    // color: #010606;
  }
`;
