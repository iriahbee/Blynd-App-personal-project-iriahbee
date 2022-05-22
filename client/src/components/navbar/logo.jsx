import React from "react";
import styled from "styled-components";
import LogoM from "./logo/Blynd.svg";
import {NavLink} from "react-router-dom"


const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const LogoImg = styled.div`
  width: 150px;
  height: 150px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;


  function Logo(props) {
  return (
    <LogoWrapper>
      <NavLink to= "/"> 
      <LogoImg>
        <img src={LogoM} alt="Blynd logo"/>
      </LogoImg>
      </NavLink>
    </LogoWrapper>
  );
}

export default Logo