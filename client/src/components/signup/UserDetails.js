import React from "react";
import styled from "styled-components"; 

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

// const StyleDatePicker = styled(DatePicker)`
//   background-color: pink;
//   border: none;
//   padding: 10px;
//   border-bottom: 3px solid white;
//   font-size: 2em;
//   color: white;
//   outline: none;
// `;


function UserDetails({ formData, setFormData }) {
  
  return (
    <StyledContainer>
      <StyledForm>
        <label>Full Name:</label>
        <StyledInput
          type="text"
          name= "full_name"
          placeholder="Name..."
          value={formData.full_name}
          onChange={(event) =>
            setFormData({ ...formData, full_name: event.target.value })
          }
        />
        <label>Mobile:</label>
        <StyledInput
          type="tel"
          name="phoneNo"
          placeholder="Mobile number"
          required={true}
          minLength={6}
          maxLength={12}
          message={"Mobile Number is required."}
          value={formData.phoneNo}
          onChange={(event) =>
            setFormData({ ...formData, phoneNo: event.target.value })
          }
        />
        <label>Birth Date:</label>
        <StyledInput
          type="date"
          name="birth_date"
          dateFormat="dd/MM/yyyy"
          placeholderText="Select your Birth date"
          value={formData.birth_date}
          onChange={(event) =>
            setFormData({ ...formData, birth_date: event.target.value })
          }
        />
        <label>Email:</label>
        <StyledInput
          name="email"
          type="email"
          placeholder="Email..."
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />

        <label>Password:</label>
        <StyledInput
          name="password"
          type="password"
          placeholder="Password..."
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />

        <label>Confirmation Password:</label>
        <StyledInput
          name="confpassword"
          type="password"
          placeholder="Confirm Password..."
          value={formData.confirmPassword}
          onChange={(event) =>
            setFormData({ ...formData, confpassword: event.target.value })
          }
        />
      </StyledForm>
    </StyledContainer>
  );
}

export default UserDetails;
