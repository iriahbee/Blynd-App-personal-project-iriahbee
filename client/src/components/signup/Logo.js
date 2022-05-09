import React from "react";
import styled from "styled-components";
import LogoM from "./images/LogoNW.svg";


const LogoImg = styled.div`
  background-color: lightcyan;
  width: 400px;
  height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  position: relative;
  margin-bottom: -10%;
  img {
    width: 50%;
    height: 50%;
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

export default Logo