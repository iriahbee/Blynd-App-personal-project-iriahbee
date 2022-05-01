import React from "react";
import styled from "styled-components";
import LogoM from "./logo/Blynd.svg";


const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const LogoImg = styled.div`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;


  function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={LogoM} alt="Blynd logo" />
      </LogoImg>
    </LogoWrapper>
  );
}

export default Logo