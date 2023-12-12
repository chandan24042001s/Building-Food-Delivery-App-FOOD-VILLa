import { restrauntlist, swiggyIMageCDN } from "../../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestrauntCard from "./RestrauntCard";
import filterData from "../utils/helper";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import { info1 } from "../utils/userContext";

const Body = () => {
  // let searchTXT="KFC";
  /** Every Component in react maintains a state*/
  const [searchTXT, setSearchTXT] = useState();
  const [restraunts, setRestraunts] = useState([]);
  const [searchResult, setSearchResult] = useState(true);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [allRestraunts, setAllRestraunts] = useState([]);
  const isOnline = useOnline();

  useEffect(() => {
    //Api Call
    getRestraunt();
  }, []);

  async function getRestraunt() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.591945&lng=73.73897649999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    setRestraunts(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestraunts(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const handleSearch = (event) => {
    const searchResult = event.target.value.toLowerCase();
    setSearchTXT(searchResult);

    const filtered = allRestraunts.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchResult)
    );

    if (filtered.length > 0) {
      setFilteredRestraunts(filtered);
    } else {
      // If the search result is empty, show all restaurants
      setFilteredRestraunts(allRestraunts);
    }
  };

  if (!isOnline) {
    return <h1> Offline hoo bhaiya</h1>;
  }

  return filteredRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center p-8">
        <input
          type="text"
          placeholder="Search  a restaurant you want..."
          className="h-10 w-[30rem] px-4 border border-gray-400  text-Secondry text-base outline-none rounded-l"
          value={searchTXT}
          onChange={handleSearch}
        ></input>
        <button className="p-2 w-24 bg-LightOrange hover:bg-Green text-Secondry text-base rounded-r">
          Search
        </button>
      </div>
      <div className="flex flex-wrap-reverse justify-center">
        {filteredRestraunts.map((restraunt, index) => (
          <Link to={"/restaurant/" + restraunt?.info?.id}>
            <RestrauntCard key={restraunt?.info?.id} {...restraunt.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
