import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center ">
      <div className="bg-DarkOrange h-[320] w-[380] mt-16 flex flex-col gap-5 justify-center items-center rounded-lg">
        <h1 className="text-5xl text-Blue">Login</h1>
        <input
          type="text"
          placeholder="Enter your email"
          className="p-4 h-[50px] w-[300px] rounded-md"
          id="shadow1"
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          className="p-4 h-[50px] w-[300px] rounded-md"
          id="shadow"
        ></input>
        <button className="bg-Blue w-[300px] h-[50px] rounded-md text-White">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
