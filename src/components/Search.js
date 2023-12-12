import React from "react";
import { useState } from "react";

const Search = () => {
  const [searchTXT, setSearchTXT] = useState();
  const [filteredRestraunts, setFilteredRestraunts] = useState();
  const [searchResult, setSearchResult] = useState();
  return (
    <div className="flex justify-center p-8">
      <input
        type="text"
        placeholder="Search  a restaurant you want..."
        className="h-10 w-[30rem] px-4 border border-gray-400  text-Secondry text-base outline-none rounded-l"
        value={searchTXT}
        onChange={(e) => {
          setSearchTXT(e.target.value);
        }}
      ></input>
      <button
        className="p-2 w-24 bg-LightOrange hover:bg-Green text-Secondry text-base rounded-r"
        onClick={() => {
          //neeed to filter data
          const data = filterData(searchTXT, filteredRestraunts);
          // console.log(data);
          if (data.length) {
            setFilteredRestraunts(data);
            setSearchResult(true);
          } else {
            setSearchResult(false);
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
