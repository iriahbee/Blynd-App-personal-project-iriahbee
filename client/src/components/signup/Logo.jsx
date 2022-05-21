import React from "react";
import styled from "styled-components";
import LogoM from "./images/LogoNW.svg";


const LogoImg = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  object-fit:contain;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  position: relative;
  margin-bottom: -10%;
  img {
    width: 40%;
    height: 40%;
    cursor: pointer;
  }
`;


  function Logo() {
  return (
  
      <LogoImg>
        <img src={LogoM} alt="Blynd logo"/>
      </LogoImg>
  );
}

export default Logo;