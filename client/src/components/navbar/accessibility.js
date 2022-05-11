import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 2em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #C20301;
  background-image: linear-gradient(to right, transparent 0%, #FC9D92 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #FC9D92;
  }
  &:not(:last-of-type) {
    margin-right: 30px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 2em;
  color: #222;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #C20301;
  transition: all 240ms ease-in-out;
  margin-right: 50px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #C20301;
  }
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

  function Accessibility(_props) {
    const history = useHistory();

  	const signUpPage = () => {
      history.push("../signup/Signup.js")
    }

    const logInPage = () => {
      history.push("../signin/Signin.js")
    }
  
  return (
    <AccessibilityContainer>
      <RegisterButton onClick={signUpPage}>Register</RegisterButton>
      <LoginButton onClick={logInPage}>Login</LoginButton>
    </AccessibilityContainer>
  );
}

export default Accessibility