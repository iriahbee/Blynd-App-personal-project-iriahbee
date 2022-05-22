import React from 'react';
import styled from "styled-components";


const StepsContainer = styled.div`
display: flex;
justify-content: center;
letter-spacing: 1px;
margin-top: 2rem;
`;

const StepContainer = styled.div`
    margin: 0.5rem 3rem;
    display: flex;
    color: #ccc;
`;

const StepDiv = styled.div`

      :first-of-type {
      border: 1px solid #ccc;
      padding: 5px;
      border-radius: 50%;
      margin-right: 0.5rem;
      width: 2rem;
      height: 2rem;
      text-align: center;
      line-height: 100%;
      padding-top: 7%;
    }

     :last-child {
      margin-top: 3%;
    }

    &.active {
      div:first-of-type {
        background-color: pink;
        border: 1px solid transparent;
        color: #fff;
      }

      div:last-of-type {
        color: pink;
      }
    }
`;


const Progress = () => {
  return (
    <React.Fragment>
      <StepsContainer>
        <StepContainer>
          <StepDiv>1</StepDiv>
          <div>Step 1</div>
        </StepContainer>
        <StepContainer>
          <StepDiv>2</StepDiv>
          <div>Step 2</div>
        </StepContainer>
        <StepContainer>
          <StepDiv>3</StepDiv>
          <div>Step 3</div>
        </StepContainer>
        <StepContainer>
          <StepDiv>4</StepDiv>
          <div>Step 4</div>
        </StepContainer>
    </StepsContainer>
    </React.Fragment>
  );
};

export default Progress;