import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Logo from "./logo.js";
import  Accessibility  from "./accessibility.js";
import  NavLinks  from "./navLinks.js";
import  DeviceSize  from "./responsive.js";
import MobileNavLinks  from "./mobileNavLinks.js";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  background-color: transparent;
  margin-top: 0.5%;
  position: fixed; top: 0; left: 0; z-index: 9999;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: right;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar(_props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo href="/"/>
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}

export default Navbar