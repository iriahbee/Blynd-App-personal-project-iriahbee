import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #050505;
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-bottom: 2px solid #C20301;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/HowWeWork">How We Work</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/OurMission">Our Mission</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/SafetyRules">Safety & Rules</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}

export default NavLinks;
