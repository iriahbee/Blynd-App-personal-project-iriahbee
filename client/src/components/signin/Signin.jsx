import styled from "styled-components";
import React, { useState } from "react";
import ThemeButton from "../theme/button";
import Header from "./Header";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  margin-top: 1rem;
`;

const FormContainer = styled.form`
  display: block;
  background: pink;
`;

const FormGroup = styled.div`
    display: block;
  background: pink;
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

function Login( setLoginUser) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

 let history=useHistory()

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8080/Login",email, password)
    .then(res=>{alert(res.data.message)
    setLoginUser(res.data.user)
    history.push("/apphome")})
  }



  return (
    <StyledContainer>
      <Header />
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <label>Email:</label>
          <StyledInput
            name="email"
            placeholder="Enter your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>Password:</label>
          <StyledInput
            name="password"
            placeholder="Enter your Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <ThemeButton type="submit" disabled={!validateForm()} style= {{marginTop: "10%", marginBottom: "10%"}}>
          Login
        </ThemeButton>
      </FormContainer>
    </StyledContainer>
  );
}

export default Login;
