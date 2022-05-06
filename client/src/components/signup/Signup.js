import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import UserDetails from "./UserDetails";
// import PersonalDetails from './PersonalDetails';
// import ProfileDescription from './ProfileDescription';
// import ProfilePhotos from './ProfilePhotos';
import Header from "./Header";

const StyledContainer = styled.div`
 display: flex;
 background: papayawhip;
 flex-direction: column; 
 align-content: center;
 justify-content: center;
 text-align: center;
 align-items: center; 
 position: relative;
 margin-top: 1rem;
`;

const FormContainer = styled.div`
  display: block;
  background: greenyellow;
`;

const SignUpForm = () => (
  <BrowserRouter>
    <StyledContainer>
    <Header />
    <FormContainer>
      <Switch>
        <Route path="/" component={UserDetails} />
      </Switch>
      </FormContainer>
    </StyledContainer>
  </BrowserRouter>
);

export default SignUpForm;
