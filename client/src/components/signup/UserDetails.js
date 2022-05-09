import React from "react";
import styled from "styled-components";
// import ThemeButton from "../theme/button";
// import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

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

const StyleDatePicker = styled(DatePicker)`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

function UserDetails({ formData, setFormData }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyledContainer>
      <StyledForm>
      <label>Full Name:</label>
      <StyledInput
        type="text"
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
        required="true"
        minLength="6"
        maxLength="12"
        message="Mobile Number is required."
        value={formData.phoneNo}
        onChange={(event) =>
          setFormData({ ...formData, phoneNo: event.target.value })
        }
      />
      <label>Birth Date:</label>
      <StyleDatePicker
        type= "text"
        name="birth_date"
        dateFormat="dd/MM/yyyy"
        placeholderText="Select your Birth date"
        value={formData.birth_date}
        selected={startDate}
        onChange={(date) =>
        setStartDate(date)
        }
      />
      <label>Email:</label>
      <StyledInput
        name="email"
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />

      <label>Password:</label>
      <StyledInput
        name="password"
        type="text"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />

      <label>Confirmation Password:</label>
      <StyledInput
        name="confpassword"
        type="text"
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
