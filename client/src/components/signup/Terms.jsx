import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
margin: 5%;
h2{
margin: 10px;
color: white
}
`;

const StyledInput = styled.input`
   padding: 0.5em;
  color: palevioletred;
  background: rgb(250, 254, 255);
  border: 1px solid white;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
  display: block;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;

const Terms = () => {
  return (
    <StyledContainer>
      <h2>
        Read the Terms and Conditions 
      </h2>

     
      <StyledInput type="checkbox" name="agree" />
      <StyledLabel>Accept Terms & Conditions</StyledLabel>


    </StyledContainer>
  );
};

export default Terms;
