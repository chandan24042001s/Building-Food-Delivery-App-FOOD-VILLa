import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="flex justify-center p-8">
        <input
          type="text"
          placeholder="Search  a restaurant you want..."
          className="h-10 w-[30rem] px-4 border border-gray-400  text-Secondry text-base outline-none rounded-l"
        ></input>
        <button className="p-2 w-24 bg-LightOrange hover:bg-Green text-Secondry text-base rounded-r">
          Search
        </button>
      </div>

      <div className=" flex gap-7 mt-4 flex-wrap justify-center">
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
