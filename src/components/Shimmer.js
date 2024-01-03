import React from "react";

const Shimmer = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-10 mt-5 mb-10">
      <div className="flex  px-3 py-3 mb-2 w-[350px] h-[120px] rounded-lg"
        id="shadow"
        >
        <a className="relative w-[700px] h-[100px] block overflow-hidden mb-2">
          <span id="loader-element"></span></a> 
      </div>
      <div className="flex  px-3 py-3 w-[720px] h-[70px]  rounded-lg"
        id="shadow"
      >
        <a className="relative w-[700px] h-[50px] block overflow-hidden mb-2">
          <span id="loader-element"></span></a> 
      </div>
      <div className="flex  gap-1 px-3 py-3 w-[35rem] mb-5 h-[70px]  rounded-lg"
        id="shadow"
      >
        <a className="relative w-[30rem] h-[50px] block overflow-hidden mb-2">
          <span id="loader-element"></span></a> 
        <a className="relative w-28 h-[50px] block overflow-hidden mb-2">
          <span id="loader-element"></span></a> 

      </div>

      </div>
      
      <div className=" flex gap-12 ml-10 mt-4 flex-wrap justify-center">
        {Array(30)
          .fill(" ")
          .map((e, index) => (
            <>
              <div
                id="shadow"
                key={index}
                className="flex flex-col w-[250px] h-[270px]  p-3 rounded-lg"
              >
                <a className="relative w-[100%] h-[160px] block overflow-hidden mb-2">
                  <span id="loader-element"></span>
                </a>
                <div className=" h-7 mb-2 w-[120px] ">
                  <span id="loader-element"></span>
                </div>
                <div className=" h-7 mb-2 w-[190px]">
                  <span id="loader-element"></span>
                </div>
                <div id="meta" className=" h-7 w-[230px] mb-2">
                  <span id="loader-element"></span>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
