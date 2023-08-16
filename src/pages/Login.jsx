import React from "react";
import Templete from "../Components/Templete";
import loginImage from "../assets/login.png"
function Login({setIsLoggedIn}){
  return(
    <Templete
      title="Welcome back"
      desc1="Buitd skills for today, tomorrow and beyond"
      desc2="Education to future-proof your career"
      img={loginImage}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}
export default Login;