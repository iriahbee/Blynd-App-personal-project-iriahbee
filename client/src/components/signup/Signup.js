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
 padding: 4em;
 background: papayawhip;
 flex-direction: column; 
 justify-content: center;
 align-items: center;
 position: relative;
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
