import React from "react";
import styled from "styled-components";
import Select from 'react-select';
import interest from './Hobbies'

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

const StyleSelect = styled(Select)`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const StyledText = styled.textarea`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const ProfileDetails = ({formData, setFormData }) => {
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

  const options2 = interest
 
  return (
    <StyledContainer>
      <StyledForm>
        <label> Profile Description:</label>
        <StyledText
          type= "text"
          name="profile_description"
          placeholder="Tell us about yourself"
          value={formData.profile_description}
          onChange={(event) =>
            setFormData({ ...formData, profile_description: event.target.value })
          }
        />

        <label>Upload a Photo:</label>
        <StyledInput
          type="file"
          name="profile_photo"
          placeholder="Enter your City..."
          value={formData.profile_photo}
          onChange={(event) =>
            setFormData({ ...formData, profile_photo: event.target.value })
          }
        />

        <label>Select your Preference:</label>
        <StyleSelect
          type="text"
          name="preference"
          placeholder= "Looking for..."
          options={options}
          value={formData.gender}
          onChange={(event) =>
            setFormData({ ...formData, preference: event.target.value })
          }
        />

       <label>Select your Gender:</label>
        <StyleSelect
          type="text"
          name="search_distance"
          placeholder= "See people within..."
          options={options1}
          value={formData.search_distance}
          onChange={(event) =>
            setFormData({ ...formData, search_distance: event.target.value })
          }
        />

        <label>Interest:</label>
        <StyleSelect
          type="text"
          name="job"
          options={options2}
          isMulti={true}
          placeholder="Choose your Interest"
          value={formData.interest}
          onChange={(event) =>
            setFormData({ ...formData, interest: event.target.value })
          }
        />
       </StyledForm>
    </StyledContainer>
  );
};

export default ProfileDetails;