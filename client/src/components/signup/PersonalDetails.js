import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div``;

const StyledInput = styled.input`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const PersonalDetails = ({ userName, onChange }) => {
  return (
    <StyledContainer>
      <p>This is step 0</p>
      <StyledInput
        value={userName}
        id="userName"
        type="text"
        onChange={onChange}
      ></StyledInput>
    </StyledContainer>
  );
};

export default PersonalDetails