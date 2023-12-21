import React, { useState } from "react";
import Intro from "./Intro";

const About = () => {
  const [show, setShow] = useState(true);
  const [btntxt, setbtntxt] = useState(false);
  const handletxt = () => {
    setbtntxt(!btntxt);
    setShow(!show);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="p-3 m-6 text-base text-center text-White font-bold font-PT rounded-lg bg-Orange h-[45px] w-[140px] "
          onClick={handletxt}
        >
          {btntxt ? "Show My Profile" : "Hide My Profile"}
        </div>
      </div>
      {show ? <Intro /> : null}
      <div className="flex justify-between mx-16 my-10">
        <div>
          <h1 className="w-[400px] font-bold text-[70px] text-Primary">
            Welcome to The world of
          </h1>
          <span className="font-bold text-[70px]  bg-Orange pl-2 pr-2 rounded-lg text-Secondry">
            Tasty & Fresh Food
          </span>
          <h4 className="font-bold text-[25px] text-Primary italic">
            "Better you will feel if you eat a Food
            <span className="text-LightOrange">Villa</span> healthy meal"
          </h4>
        </div>
        <div>
          <img src="https://foodfire-app.netlify.app/burger-image.ec55d069.png"></img>
        </div>
      </div>
    </>
  );
};

export default About;

/**
*parent constructor
parent render
child constructor first child 
child render first child 
child constrctor secon child
child render second child
childDIdMount first child
child DidMount second child
parent did mount 
 */
