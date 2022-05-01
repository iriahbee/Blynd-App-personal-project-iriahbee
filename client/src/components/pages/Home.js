import React from "react";
import { useHistory } from "react-router-dom";
//import "../styles/Home.css"

function Home() {
	const history = useHistory();

	const signUpPage = () => {
		history.push("../SignUp")
	}
	return (
    
    <button className="btn btn-secondary btn-gradient"
      onClick={signUpPage}>Sign Up
    </button>
  
    );
  };
 
  export default Home;