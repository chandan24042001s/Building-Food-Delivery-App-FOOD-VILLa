import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggyIMageCDN } from "../../constant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [restaurantBasic, setRestaurantBasic] = useState({});
  const [cardItems, setCardItems] = useState({});


  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //const itemCards = restaurant?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  async function getRestaurantInfo() {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.591945&lng=73.73897649999999&restaurantId=229"
    );
    const json = await data.json();
    //console.log(json.data.cards[0]?.card?.card?.info);
    console.log(json);

    //setRestaurant(json.data.cards[0]?.card?.card?.info);
    setRestaurant(json.data.cards[0]?.card?.card?.info);
    setRestaurantBasic(json.data);
    setCardItems(json.data);
    

  }
  //const basicInfo = restaurant?.cards[0]?.card?.card?.info;
  //const itemCards = cardItems?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  

  return (
    <div className="menu">
        <h1> Restaurant Id: {id} </h1>
      <div>
        </div>
        <div className="menu-card">
        <img className="restaurant-name" src={swiggyIMageCDN+restaurant.cloudinaryImageId} />
        <h2> {restaurant.name} </h2>
        <h3> {restaurant.city} </h3>
        <h3> {restaurant.area} </h3>
        <h3> {restaurant.avgRating} </h3>
        <h3> {restaurant.costForTwo/100} </h3>
      </div>
      <div>
        <h1>MENU</h1>
        <ul>
          {
            // console.log(cardItems.cards[3].groupedCard.cardGroupMap.REGULAR.cards)
              //.groupedCard.cardGroupMap.REGULAR.cards)
          
          // ))
          //console.log(cardItems?.cards)
      // console.log(cardItems?.cards)
          
         (cardItems?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map(
          (items)=>(
              <li> { items && items?.card?.info?.name} </li>
            )
           ) 
           
          }
        </ul>
      </div>
     
    </div>
  );
};

export default RestaurantMenu;
