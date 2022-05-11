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

const Terms= () => {
  return (
    <StyledContainer>
      <p>I agree to the <b>terms and conditions</b></p>

      
      <StyledInput
        type="checkbox"
        name="agree"
      ><span><label>I agree</label></span></StyledInput>

    
      <StyledInput
        type="checkbox"
        name="disagree"
      ><label>I do NOT agree</label></StyledInput>
      
    </StyledContainer>
  );
};
  
  export default Terms;