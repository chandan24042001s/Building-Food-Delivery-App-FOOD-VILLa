import { restrauntlist, swiggyIMageCDN } from "../../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestrauntCard from "./RestrauntCard";
import filterData from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  // let searchTXT="KFC";
  /** Every Component in react maintains a state*/
  const [searchTXT, setSearchTXT] = useState();
  const [searchClick, setSearchClick] = useState("true");
  const [restraunts, setRestraunts] = useState([]);
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
    console.log(json);

    setRestraunts(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestraunts(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      json.data.cards[2]?.card.card.gridElements.infoWithStyle.restaurants
    );
  }

  console.log("render");

  function filterData(searchTXT, restraunts){
    const filteredData=restraunts.filter((restaurant)=>restaurant.info.name.includes(searchTXT));
    // const filteredData= restraunts.filter((restraunts)=>{
    //   // restraunts.filter()(restraunt.info.name.includes(searchTXT))
    // }}
    return filteredData;
  }

  if (!isOnline) {
    return <h1> Offline hoo bhaiya</h1>;
  }

  return filteredRestraunts.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search here"
          className="search-input"
          value={searchTXT}
          onChange={(e) => {
            setSearchTXT(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            //neeed to filter data
            const data = filterData(searchTXT, allRestraunts);
            console.log(data);
            setFilteredRestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardlist">
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
