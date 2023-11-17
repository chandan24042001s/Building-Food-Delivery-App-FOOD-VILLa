import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggyIMageCDN } from "../../constant";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
 
  const [cardItems, setCardItems] = useState({});


  const restaurant=useRestaurant();
  console.log(restaurant[3])
 
  //const basicInfo = restaurant?.cards[0]?.card?.card?.info;
  //const itemCards = cardItems?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  

  return (
    <div className="menu">
        <h1> Restaurant Id: {id} </h1>
        
      <div>
        </div>
        <div className="menu-card">
        {console.log(restaurant)}
        {/* <h2> {restaurant.card?.card?.info.name} </h2> */}
       
        {/* <img className="restaurant-name" src={swiggyIMageCDN+restaurant.cards[0]?.card?.card?.info.cloudinaryImageId} />
        <h2> {restaurant.cards[0]?.card?.card?.info.name} </h2>
        <h3> {restaurant.cards[0]?.card?.card?.info.city} </h3>
        <h3> {restaurant.cards[0]?.card?.card?.info.area} </h3>
        <h3> {restaurant.cards[0]?.card?.card?.info.avgRating} </h3>
        <h3> {restaurant.cards[0]?.card?.card?.info.costForTwo/100} </h3> */}
      </div>
      <div>
        <h1>MENU</h1>
        <ul>
          {
            // console.log(cardItems.cards[3].groupedCard.cardGroupMap.REGULAR.cards)
              //.groupedCard.cardGroupMap.REGULAR.cards)
          
          // ))
          //console.log(cardItems?.cards)
      //console.log(cardItems)
          
        (restaurant[3]?.card?.card?.itemCards).map(
         (items,index)=>(
             <li key={index}> { items && items?.card?.info?.name} </li>
           )
          ) 
           
        }
        </ul>
      </div>
     
    </div>
  );
};

export default RestaurantMenu;
