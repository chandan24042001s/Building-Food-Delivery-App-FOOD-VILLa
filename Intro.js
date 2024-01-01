import React from "react";

const Intro = () => {
  return (
    <div className="flex justify-center gap-10 ">
      <div
        className="h-[360px] w-[500px] px-10 py-4 text-center flex flex-col items-center  rounded-lg"
        id="shadow-2"
      >
        <h1 className="text-[28px] font-bold font-PT">About Me</h1>
        <img
          src={require("../Images/user.jpeg")}
          className=" rounded-full m-4 h-[150px] w-[150px] "
        ></img>
        <p className="text-[18px] mb-2">
          React.js | Next.js | 20k+ @Linkdin | JavaScript | Frontend Developer
        </p>
        <ul className="flex text-[38px] gap-10">
          <a href="https://www.linkedin.com/in/chandan-kumal777/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/chandan24042001s?tab=repositories">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://mail.google.com/mail/u/3/#inbox?compose=new">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://twitter.com/oscar_harry_sir">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </ul>
      </div>
      <div
        className="w-[800px] rounded-lg text-center font-bold font-PT"
        id="shadow-2"
      >
        <h1 className="text-[28px]  m-4 mb-8">
          Food <span className="text-Orange">Villa</span> App Github Repository
        </h1>
        <div>
          <div
            id="shadow-2"
            className="h-[260px] flex flex-col items-center rounded-lg mx-3 "
          >
            <h1
              className="text-Orange text-[28px] w-[250px] p-2 h-14 m-4 rounded-lg"
              id="shadow-2"
            >
              Namaste-React
            </h1>
            <h1 className="text-BlackGray text-[18px] px-12 py-6 text-center">
              ❤ Namaste React Live Course from Zero to Hero 🚀 by Akshay
              Saini(Founder of NamasteDev). This repository for Assignment &
              Class Notes taken during Namaste React Live Course #namaste
              #javascript #react
            </h1>
            <ul className="flex justify-center gap-6 text-lg text-Orange items-center ">
              <li>
                <i class="fa-solid fa-user-group text-Orange mr-1"></i>Followers
              </li>
              <li>
                <i class="fa-solid fa-code-fork text-Orange mr-1"></i>Forks
              </li>
              <li>
                <i class="fa-regular fa-star text-Orange mr-1"> </i>Stars
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
