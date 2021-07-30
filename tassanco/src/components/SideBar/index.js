import React from "react";
import  {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SideBarRoute } from "./SidebarElements";


const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="about2">Gallery</SidebarLink>
                    <SidebarLink to="about3">Teams</SidebarLink>
                    <SidebarLink to="about4">Contact Us</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBarRoute>Contact Us</SideBarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}
export default Sidebar; 