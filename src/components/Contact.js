import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center mt-24 items-center">
      <div>
        {/* <img
          className="h-64"
          src="https://foodfire-app.netlify.app/Contact-Us.13c5d28a.png"
        ></img> */}
      </div>

      {/* Try */}
      <div class="h-80 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div class="relative">
          <div class="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
            <div class=" relative overflow-hidden z-10 bg-white p-6 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl    after:top-24 after:-right-12">
          <div
            id="form-container"
            class="shadow-2xl  px-14 py-10 rounded-lg  relative z-10 transform transition duration-500 ease-in-out"
          >
              <div className="">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="font-bold text-5xl font-PT Sans">Contact us</h2>
            <input
              type="text"
              placeholder="Name"
              className="h-[50px] w-[600px] border border-LightOrange rounded-md p-4"
              id="shadow-1"
            ></input>
            <input
              type="text"
              placeholder="Email"
              className="h-[50px] w-[600px] border border-LightOrange rounded-md p-4"
              id="shadow-1"
            ></input>
            <textarea
              typeof="text"
              placeholder="Type your Message here..."
              className="h-[75px] w-[600px] border border-LightOrange rounded-md pl-4 pt-2"
              id="shadow-1"
            ></textarea>
           <button
        class="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        type="submit"
      >
        Send Message
      </button>
          </div>
            </div>

          </div>
            </div>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
