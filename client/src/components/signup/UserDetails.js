import { React, useState } from "react";
import styled from "styled-components";
import ThemeButton from "../theme/button";
import { motion } from 'framer-motion';

const StyledContainer = styled.div``;

const StyledForm = styled.form``;

const StyledInput = styled.input`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const UserDetails = () => {
  const [fullname, setfullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  //function to update state of full name with value
  const fullNameUpdate = (e) => {
    setfullName(e.target.value);
  };
  //function to update state of age with value
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  // function to update state of email with value
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // function to update state of password with
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // function to update state of confirm password

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  async function handleSubmit (e,props) {
    if (password !== confPassword) {
      alert("Password does not match");
    } else {
      const postURL = "http://localhost:8080/api/profile/";
      await fetch(postURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullname,
          email: email,
          password: password,
          age: age,
        }),
      }).then(() => {
        props.history.push('./PersonalDetails.js');
      });
    }
    e.preventDefault();
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit= {(e)=>{handleSubmit(e)}}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <label>Full Name:</label>
        <StyledInput required onChange={fullNameUpdate}></StyledInput>
        <label>Age:</label>
        <StyledInput required onChange={handleAgeChange}></StyledInput>
        <label>Email:</label>
        <StyledInput required onChange={handleEmailChange}></StyledInput>
        <label>Password:</label>
        <StyledInput required onChange={handlePasswordChange}></StyledInput>
        <label>Confirm Password:</label>
        <StyledInput required onChange={handleConfPasswordChange}></StyledInput>
        <ThemeButton type="submit">Next</ThemeButton>
        </motion.div>
      </StyledForm>
    </StyledContainer>
  );
};

export default UserDetails;
