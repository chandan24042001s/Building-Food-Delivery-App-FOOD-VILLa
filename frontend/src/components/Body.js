import { HOME_PAGE_URL, restrauntlist, swiggyIMageCDN } from "../../constant";
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

  const getRestraunt = async () => {
const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
// initialize checkJsonData() function to check Swiggy Restaurant data
async function checkJsonData(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards.length; i++) {

    // initialize checkData for Swiggy Restaurant data
    let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // if checkData is not undefined then return it
    if (checkData !== undefined) {
      return checkData;
    }
  }
}

// call the checkJsonData() function which return Swiggy Restaurant data
const resData = await checkJsonData(json);
    setRestraunts(
      resData
    );
    setAllRestraunts(
      resData
    );
    setFilteredRestraunts(
      resData
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

  return (filteredRestraunts && filteredRestraunts.length === 0) ? (
    <Shimmer />
  ) : (
    <div id="body" >
       <h2>FoodVilla</h2>
      <h1>Discover the best food & drinks in Delhi NCR</h1>
      <div  className="flex justify-center p-8">
     
        <input
          type="text"
          placeholder="Search here"
          className="h-16 w-[30rem] px-4 border border-gray-400 outline-none rounded-l"
          value={searchTXT}
          onChange={handleSearch}
        ></input>
        <button className=" w-28 bg-LightOrange hover:bg-Green text-Secondry text-base rounded-r">
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        {filteredRestraunts && filteredRestraunts.map((restraunt, index) => (
          <Link to={"/restaurant/" + restraunt?.info?.id}>
            <RestrauntCard key={restraunt?.info?.id} {...restraunt?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
