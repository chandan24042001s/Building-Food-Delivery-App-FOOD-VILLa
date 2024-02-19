import { useNavigate } from "react-router-dom";
import LoginImage from "./../../assets/login-image.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Login = () => {
  // const {isSuccess}=useSelector((state)=>state.auth)
  // const {isLoggedIn}=useSelector((state)=>state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
 
  const [error,setError]=useState("");


  const loginUser = async (e) => {
    e.preventDefault();

    console.log(email, password);
    if(!email || !password){
        setError("Please Enter Email")
    }
    if(password.length<6){
       setError("password must be upto 6 characters")
    }
    if(!validateEmail(email)){
        setError("please enter a valid email")
    }

    const userData={email,password}
    
  };
  //  useEffect(()=>{
  //   console.log(isSuccess)
  //   if(isSuccess && isLoggedIn){
  //      navigate("/")
  //   }
  //   dispatch(RESET_AUTH());
  //  },[isLoggedIn,isSuccess,dispatch,navigate])

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
