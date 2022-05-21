import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

function UserDetails({ formData, setFormData }) {
  return (
    <StyledContainer>
      <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }}>
        <StyledForm>
          <StyledLabel>Full Name:</StyledLabel>
          <StyledInput
            type="text"
            name="full_name"
            placeholder="Name..."
            value={formData.full_name}
            onChange={(event) =>
              setFormData({ ...formData, full_name: event.target.value })
            }
          />
          <StyledLabel>Mobile:</StyledLabel>
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
          <StyledLabel>Birth Date:</StyledLabel>
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
          <StyledLabel>Email:</StyledLabel>
          <StyledInput
            name="email"
            type="email"
            placeholder="Email..."
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />

          <StyledLabel>Password:</StyledLabel>
          <StyledInput
            name="password"
            type="password"
            placeholder="Password..."
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />

          <StyledLabel>Confirmation Password:</StyledLabel>
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
      </motion.div>
    </StyledContainer>
  );
}

export default UserDetails;
