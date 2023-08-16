import React from "react";
import signupImg from "../assets/signup.png"
import Templete from "../Components/Templete";
function Signup({setIsLoggedIn}){
  return(
    <Templete
    title="Welcome back"
    desc1="Buitd skills for today, tomorrow and beyond"
    desc2="Education to future-proof your career"
    img={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
  />
  );
}
export default Signup;