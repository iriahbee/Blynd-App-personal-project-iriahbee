import React from "react";
import styled from "styled-components";
import ThemeButton from "../theme/button" 

const StyledContainer = styled.div`
display: flexbox;
`;

const StyledInput = styled.input`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const ButtonContainer = styled.div`
 align-items: center;
 align-content: center;
 justify-content: center;

`;

const UserDetails = ({ email, onClick }) => {
  return (
    <StyledContainer>
      <p>Create Account</p>
      <StyledInput
        value={email}
        id="userName"
        type="text"
        placeholder="Email Address"
      ></StyledInput>
      <ThemeButton onClick={onClick}>Previous</ThemeButton>
      <ThemeButton onClick={onClick}>Next</ThemeButton>
    </StyledContainer>
  );
};

export default UserDetails;
