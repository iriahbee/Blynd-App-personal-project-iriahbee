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

const PersonalDetails = () => {
  const [phonenumber, setPhonenumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("");

  //function to update state of full name with value
  const handlePhoneNumberChange = (e) => {
    setPhonenumber(e.target.value);
  };
  //function to update state of age with value
  const handleBirthDateChange = (e) => {
    setBirthdate(e.target.value);
  };

  // function to update state of email with value
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  // function to update state of password with
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  // function to update state of confirm password

  const handleJobChange = (e) => {
    setJob(e.target.value);
  };

  async function handleSubmit(e,props) {
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
          phoneNo: phonenumber,
          birth_date: birthdate,
          gender: gender,
          location: location,
          job: job,
        }),
      }).then(() => {
        props.history.push('./ProfileDescription.js');
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
        <label>Phone Number:</label>
        <StyledInput required onChange={handlePhoneNumberChange}></StyledInput>
        <label>Birth Date:</label>
        <StyledInput required onChange={handleBirthDateChange}></StyledInput>
        <label>Gender:</label>
        <StyledInput required onChange={handleGenderChange}></StyledInput>
        <label>Profession:</label>
        <StyledInput required onChange={handleLocationChange}></StyledInput>
        <label>Location:</label>
        <StyledInput required onChange={handleJobChange}></StyledInput>
        <ThemeButton type="submit">Next</ThemeButton>
        </motion.div>
      </StyledForm>
    </StyledContainer>
  );
};

export default PersonalDetails;