import React from "react";
import styled from "styled-components";
import Select from "react-select";
import interest from "./Hobbies";
import { motion } from 'framer-motion';

const StyledContainer = styled.div`
margin-top: 5%;
`;

const StyledForm = styled.form`
  color: palevioletred;
  display: block;
	width: 500px;
	margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledLabel= styled.label `
 margin-bottom: 0.5em;
	color: palevioletred;
  display: block;
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

const StyleSelect = styled(Select)`
  padding: 0.5em;
	color: palevioletred;
	background: rgb(250, 254, 255);
	border: 1px solid white;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
  display: block;
`;

const StyledText = styled.textarea`
  padding: 0.5em;
	color: palevioletred;
	background: rgb(250, 254, 255);
	border: 1px solid white;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
  display: block;
`;

const ProfileDetails = ({ formData, setFormData }) => {
  const options = [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" },
    { value: "Both", label: "Both" },
  ];

  const options1 = [
    { value: "5 miles", label: "5 miles" },
    { value: "10 miles", label: "10 miles" },
    { value: "15 miles", label: "15 miles" },
    { value: "20 miles", label: "20 miles" },
    { value: "25 miles", label: "25 miles" },
    { value: "30 miles", label: "30 miles" },
  ];

  const options2 = interest;

  return (
    <StyledContainer>
       <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
    >
      <StyledForm>
        <StyledLabel> Profile Description:</StyledLabel>
        <StyledText
          type="text"
          name="profile_description"
          placeholder="Tell us about yourself"
          value={formData.profile_description}
          onChange={(event) =>
            setFormData({
              ...formData,
              profile_description: event.target.value,
            })
          }
        />

        <StyledLabel>Upload a Photo:</StyledLabel>
        <StyledInput
          type="file"
          name="profile_photo"
          placeholder="Enter your City..."
          value={formData.profile_photo}
          onChange={(event) => 
            setFormData({ ...formData, profile_photo: event.target.value })
          }
        />

        <StyledLabel>Select your Preference:</StyledLabel>
        <StyleSelect
          type="text"
          name="preference"
          placeholder="Looking for..."
          options={options}
          onChange={(e) => {
            setFormData({ ...formData, preference: e.value });
          }}
        />

        <StyledLabel>Search Distance:</StyledLabel>
        <StyleSelect
          type="text"
          name="search_distance"
          placeholder="See people within..."
          options={options1}
          onChange={(e) => {
            setFormData({ ...formData, search_distance: e.value });
          }}
        />

        <StyledLabel>Interest:</StyledLabel>
        <StyleSelect
          type="text"
          name="job"
          options={options2}
          isMulti={true}
          placeholder="Choose your Interest"
          onChange={(e) => {
            setFormData({ ...formData, interest: e.value });
          }}
        />
      </StyledForm>
      </motion.div>
    </StyledContainer>
  );
};

export default ProfileDetails;
