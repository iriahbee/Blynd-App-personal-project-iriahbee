import React from "react";
import styled from "styled-components";
import Select from "react-select";

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

const StyleSelect = styled.style`
  background-color: pink;
  border: none;
  font-size: 2em;
  color: white;
  outline: none;
`;


const PersonalDetails = ({ formData, setFormData }) => {
  const options = [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" },
    { value: "Other", label: "Other" },
  ];
  
  const handleChange = (event) => {
    setFormData(event.target.value)
  }
  
  return (
    <StyledContainer>
      <StyledForm>
        <label>Country:</label>
        <StyledInput
          type= "text"
          name="country"
          placeholder="Enter your Country..."
          value={formData.country}
          onChange={handleChange}
        />

        <label>City:</label>
        <StyledInput
          type= "text"
          name="city"
          placeholder="Enter your City..."
          value={formData.city}
          onChange={(event) =>
            setFormData({ ...formData, city: event.target.value })
          }
        />

        <label>Select your Gender:</label>
        <Select
          as="select"
          type="text"
          styles={(StyleSelect)}
          name="gender"
          placeholder= "Select your Gender"
          options={options}
          value={formData.gender}
          onChange={(e) =>
            setFormData({ ...formData, gender: e.target.value })
          }
        />

        <label>Profession:</label>
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
    </StyledContainer>
  );
};

export default PersonalDetails;
