import React from "react";
import styled from "styled-components";
import Select from "react-select";
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

const StyledLabel = styled.label`
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

const PersonalDetails = ({ formData, setFormData }) => {
  const options = [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" },
    { value: "Other", label: "Other" },
  ];


  console.log("Personal details render", formData);

  return (
    <StyledContainer>
      <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
    >
      <StyledForm>
        <StyledLabel>Country:</StyledLabel>
        <StyledInput
          type="text"
          name="country"
          placeholder="Enter your Country..."
          value={formData.country}
          onChange={(event) =>
            setFormData({ ...formData, country: event.target.value })
          }
        />

        <StyledLabel>City:</StyledLabel>
        <StyledInput
          type="text"
          name="city"
          placeholder="Enter your City..."
          value={formData.city}
          onChange={(event) =>
            setFormData({ ...formData, city: event.target.value })
          }
        />

        <StyledLabel>Select your Gender:</StyledLabel>
        <StyleSelect
          type="text"
          name="gender"
          placeholder="Select your Gender"
          options={options}
          onChange={(e) => {
            setFormData({ ...formData, gender: e.value });
          }}
        />

        <StyledLabel>Profession:</StyledLabel>
        <StyledInput
          type="text"
          name="job"
          placeholder="Enter your Profession"
          value={formData.job}
          onChange={(event) =>
            setFormData({ ...formData, job: event.target.value })
          }
        />
      </StyledForm>
      </motion.div>
    </StyledContainer>
  );
};

export default PersonalDetails;
