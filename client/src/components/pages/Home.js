import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import BgImg from "./background/BlyndBackg.svg";

const GSBContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; 
  background-position: center center;
  background-image: url(${BgImg});
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  img{
  position:relative; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 25%;
  min-height: 25%;  
  }
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

const Description = styled.h1`
color: hsla(0, 0%, 95.3%, 1);
font-size: 50px;
margin: 0 0 24px;
line-height: 3em;
letter-spacing: 1.5;
text-shadow: 2px 2px 4px #000000;

`;

const GetStartedButton = styled.button`
  border: 0;
  outline: 0;
  padding: 10px 2em;
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #C20301;
  background-image: linear-gradient(to right, transparent 0%, #DD3E46 100%);
  transition: all 240ms ease-in-out;
  box-shadow: 2px 2px #141414;
  cursor: pointer;
  &:hover {
    background-color: #C20301;
  }
  
`;

function Home() {
  const history = useHistory();

  const signUpPage = () => {
    history.push("../signup/Signup.js");
  };
  return (
    <GSBContainer>
      <Content>
        <BgImage img={BgImg} />
        <CTA>
          <GetStartedButton onClick={signUpPage}>Get Started</GetStartedButton>
          <Description> 
                   Trust the Process
               </Description>
        </CTA>
      </Content>
    </GSBContainer>
  );
}

export default Home;
