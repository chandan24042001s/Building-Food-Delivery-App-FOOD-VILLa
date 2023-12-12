import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-between ml-44 mr-44 mt-20 items-center">
      <div>
        <img
          className="h-64"
          src="https://foodfire-app.netlify.app/Contact-Us.13c5d28a.png"
        ></img>
      </div>
      <div className="">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="font-bold text-5xl font-PT Sans">Contact us</h2>
          <input
            type="text"
            placeholder="Name"
            className="h-[40px] w-[600px] border border-LightOrange rounded-md p-4"
            id="shadow-1"
          ></input>
          <input
            type="text"
            placeholder="Email"
            className="h-[40px] w-[600px] border border-LightOrange rounded-md p-4"
            id="shadow-1"
          ></input>
          <textarea
            typeof="text"
            placeholder="Type your Message here..."
            className="h-[56px] w-[600px] border border-LightOrange rounded-md pl-4 pt-2"
            id="shadow-1"
          ></textarea>
          <button className="h-10  w-20 rounded-md  bg-LightOrange text-White">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
