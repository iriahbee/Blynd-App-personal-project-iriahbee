import { React, useState } from "react";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import ProfileDetails from "./ProfileDetails";
import Terms from "./Terms";
import Header from "./Header";
import Button from "../theme/button";

const StyledContainer = styled.div`
  display: flex;
  background: papayawhip;
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
  background: greenyellow;
`;

const FormHead = styled.div``;

const FormBody = styled.div``;

const FormFooter = styled.div``;

function SignUpForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    full_name: "",
    phoneNo: "",
    birth_date: "",
    password: "",
    confpassword: "",
    country: "",
    state: "",
    city: "",
    gender: "",
    job: "",
    profile_photo: "",
    profile_description: "",
    interest: "",
    showmale: "",
    showfemale: "",
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

  return (
    <StyledContainer>
      <Header />
      <FormContainer>
        <FormHead>
          <h3>{FormTitles[page]}</h3>
        </FormHead>
        <FormBody>{PageDisplay()}</FormBody>
        <FormFooter>
          <Button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </Button>
          <Button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </Button>
        </FormFooter>
      </FormContainer>
    </StyledContainer>
  );
}

export default SignUpForm;
