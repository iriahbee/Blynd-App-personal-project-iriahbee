import { React, useState, useEffect } from "react";
import styled from "styled-components";
import ThemeButton from "../theme/button";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import csc from "country-state-city";
import axios from "axios";
import Swal from "sweetalert2";

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

// const StyledGroup = styled.div``;

// const StyleSelect = styled(Select)`
//   background-color: pink;
//   border: none;
//   padding: 10px;
//   border-bottom: 3px solid white;
//   font-size: 2em;
//   color: white;
// //   outline: none;
// `;

const PersonalDetails = () => {
    return (
      <StyledContainer>
        <p>This is step 2</p>
        <StyledInput
          type="text"
        ></StyledInput>
      </StyledContainer>
    );
  };

export default PersonalDetails;
