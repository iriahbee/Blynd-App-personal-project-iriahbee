import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import styled from "styled-components";
import Logo from "../signup/Logo";


const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid #f9f9f9;
`;


const Header = () => {
  return (
    <StyledContainer>
      <IconButton style={{ 'marginLeft': "100px" }}>
        <PersonIcon fontSize="large" className= "header-icon" style={{ 'color': "#C20301" }}  />
      </IconButton>
      <Logo/>
      <IconButton style={{ 'marginRight': "100px" }} >
        <ForumIcon fontSize="large" style={{ 'color': "#C20301" }}  className= "header-icon"  />
      </IconButton>
    </StyledContainer>
  );
};

export default Header;
