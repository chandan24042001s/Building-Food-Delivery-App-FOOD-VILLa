import { restrauntlist, swiggyIMageCDN } from "../../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestrauntCard = (props) => {
  return (
    <div>
      <div className="card">
        <img className="dish" src={swiggyIMageCDN + props.cloudinaryImageId} />
        <h2>{props.name}</h2>
        <h4>{props.cuisines?.join(" ")}</h4>
        {<h5>{props.avgRating} stars</h5>}
      </div>
    </div>
  );
};
const Body = () => {
  // let searchTXT="KFC";
  /** Every Component in react maintains a state*/
  const [searchTXT, setSearchTXT] = useState();
  const [searchClick, setSearchClick] = useState("true");
  const [restraunts, setRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [allRestraunts, setAllRestraunts] = useState([]);

  useEffect(() => {
    //Api Call
    getRestraunt();
  }, []);

  async function getRestraunt() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.591945&lng=73.73897649999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestraunts(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestraunts(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestraunts(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  console.log("render");

  function filterData(searchText, restraunts) {
    const filterdata = restraunts.filter((restraunt) => {
      console.log(restraunt);
      return restraunt.info.name.includes(searchText);
    });
    console.log(filterdata);
    return filterdata;
  }

  return filteredRestraunts.length === 0 ? (
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
          <RestrauntCard key={index} {...restraunt.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
