import { React, useState} from "react";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import ProfileDetails from "./ProfileDetails";
import Terms from "./Terms";
import Header from "./Header";
import ThemeButton from "../theme/button";
import {postUser} from "../../services/profileService";
import Swal from 'sweetalert2';
import {useHistory} from 'react-router-dom'



const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  margin-top: 1rem;
`;

const FormContainer = styled.div`
  display: block;
  background: pink;
`;

const FormHead = styled.div`
margin-top: 5%;
`;

const FormBody = styled.div``;

const FormFooter = styled.div`
 margin-top: 10%;
 margin-bottom: 2%;
 
`;

function SignUpForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    full_name: "",
    phoneNo: "",
    birth_date: "",
    password: "",
    confpassword: "",
    country: "",
    city: "",
    gender: "",
    job: "",
    profile_photo: "",
    profile_description: "",
    interest:[],
    preference: "",
    search_distance: "",
  });

  const FormTitles = ["User Details", "Personal Info", "Profile", "Terms"];

  const PageDisplay = () => {
    if (page === 0) {
      return <UserDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <ProfileDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <Terms formData={formData} setFormData={setFormData} />;
    }
  };


 let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    postUser(formData);
    Swal.fire('Awesome!', "You're successfully registered!", 'success').then(
      (result) => {
        if (result.isConfirmed || result.isDismissed) {
          history.push('/apphome');
        }
      }
    );
  };

  return (
    <StyledContainer>
      <Header />
      <FormContainer>
        <FormHead>
          <h3>{FormTitles[page]}</h3>
        </FormHead>
        <FormBody>{PageDisplay()}</FormBody>
        <FormFooter>
          <ThemeButton
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            style = {{marginRight: "10%"}}
          >
            Prev
          </ThemeButton>
          {page === FormTitles.length - 1 ? (
            <ThemeButton onClick={handleSubmit} onSubmit={handleSubmit}>
              Submit
            </ThemeButton>
          ) : (
            <ThemeButton onClick={() => setPage((currPage) => currPage + 1)} style = {{marginLeft: "10%"}}>
              Next
            </ThemeButton>
          )}
        </FormFooter>
      </FormContainer>
    </StyledContainer>
  );
}

export default SignUpForm;
