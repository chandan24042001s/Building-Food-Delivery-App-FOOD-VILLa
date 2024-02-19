import React, { useState } from 'react'

import { useDispatch, useSelector } from "react-redux";


const SignUP = () => {

    const [errorMsg, setErrorMsg] = useState();



    const [isSignInForm, setIsSignInForm] = useState(false);
  


  
    const toggleSignInform = () => {
      setIsSignInForm(!isSignInForm);
    };
  
    const handlebuttonclick = () => {
      const message = checkValidateData(
        email.current.value
        // password.current.value
      );
  
      setErrorMsg(message);
      console.log(email.current.value);
      // console.log(password.current.value);
  
      if (message) return;
  
  return (
    <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        //   className=" absolute w-full md:w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90"
        >
          <h1 className="font-bold text-2xl md:text-3xl py-4 text-center">
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}{" "}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
             
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            />
          )}

          <input
            type="text"
          
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />

          <input
            type="password"
            
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />

          <p className="text-LightRed font-bold py-2 text-xl text-center">
            {errorMsg}
          </p>

          <button
            className="p-4 my-6 bg-LightRed w-full rounded-lg "
            onClick={handlebuttonclick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="py-4 cursor-pointer text-center"
            onClick={toggleSignInform}
          >
            {" "}
            {isSignInForm
              ? "New to Netflix ? Sign Up Now"
              : " Already Registed? Sign In Now"}{" "}
          </p>
        </form>
    </div>
  )
}
}

export default SignUP