import {React, useState, useEffect } from 'react';
import styled from "styled-components";
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import ProfileDescription from './ProfileDescription';
import ProfilePhotos from './ProfilePhotos';
// import Logo from './Logo';


const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 300px;
`;

const WAIT_INTERVAL = 750;
let progressTimer = null;

function SignUpForm() {
    const [step, setStep] = useState(0);

    const [formData, setFormData] = useState({
      email: "",
    });

    const [completedSteps, setCompletedSteps] = useState({
      UserDetails: false,
      PersonalDetails: false,
      ProfileDescription: false,
      ProfilePhotos: false,
    });
  
    const handleChange = (evt) => {
      const { id, value } = evt.target;
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
      console.log(formData.email);
    };

    useEffect(() => {
      if (formData.email.length > 0) {
        setCompletedSteps((prevState) => ({
          ...prevState,
          email: true,
        }));
      }
    }, [formData]);
  
    useEffect(() => {
      if (completedSteps.step0 && !completedSteps.step1) {
        clearTimeout(progressTimer);
        progressTimer = setTimeout(() => {
          return setStep(1);
        }, WAIT_INTERVAL);
      }
    });
  
    return (
      <>
        <StyledContainer>
        {step === 0 && <UserDetails onClick={handleChange} />} 
        {step === 1 && <PersonalDetails />}
        {step === 2 && <ProfileDescription />}
        {step === 3 && <ProfilePhotos />}
      </StyledContainer>
      </>
    );
  };


export default SignUpForm;

