import React from "react";
import styled from "styled-components";
import LogoM from "./images/LogoIcon.svg";


const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1000px;

`;

const LogoImg = styled.div`
  width: 300px;
  height: 300px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;


  function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={LogoM} alt="Blynd logo"/>
      </LogoImg>
    </LogoWrapper>
  );
}

export default Logo