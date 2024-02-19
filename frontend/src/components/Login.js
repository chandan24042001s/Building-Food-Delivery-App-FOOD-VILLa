import { useNavigate } from "react-router-dom";
import LoginImage from "./../../assets/login-image.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Login = () => {
  // const {isSuccess}=useSelector((state)=>state.auth)
  // const {isLoggedIn}=useSelector((state)=>state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
 
  const [error,setError]=useState("");
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  const loginUser=async(e)=>{
    e.preventDefault();
    console.log(email,password);
    if(!email || !password){
        setEmail("All field are required")
    }
    if(password.length<6){
        setError("password must be upto 6 characters")
    }
    if(!validateEmail(email)){
        setError("please enter a valid email")
    }
  
    const userData={email,password}
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      console.log('Login successful:', data);
      navigate("/")
      // Handle successful login (e.g., redirect to a dashboard, show a success message)
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., show an error message)
    }
  }

  return (
    <div id="login">
      <div id="login-left">
        <img src={LoginImage} alt="" />
      </div>
      <div id="login-right">
        <form onSubmit={loginUser} id="login-box">
          <h1>Login</h1>
          <label>Email</label>
          <br />
          <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            type="email"
            placeholder=" "
          />
          <br />
          <label>Password</label>
          <br />
          <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            type="password"
            placeholder=""
          />
          <br />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
