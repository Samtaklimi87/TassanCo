import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="home">
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="page1">
            Gallery
          </SidebarLink>
          <SidebarLink onClick={toggle} to="page2">
            Teams
          </SidebarLink>
          <SidebarLink onClick={toggle} to="page3">
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">Contact Us</SideBarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
