import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggyIMageCDN } from "../../constant";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
 
  const [cardItems, setCardItems] = useState({});
  const dispatch=useDispatch();

  const addFoodItem=(items)=>{
    dispatch(addItem(items));
  }


  const restaurant=useRestaurant();
  console.log(restaurant)
 
  //const basicInfo = restaurant?.cards[0]?.card?.card?.info;
  //const itemCards = cardItems?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  

  return (
    <div className="menu">
        <h1> Restaurant Id: {id} </h1>
        
      <div>
        </div>
    {restaurant && restaurant.length===0 && <Shimmer/>}
    <h1>MENU</h1>
      <div className="flex justify-center">
        <div> { " "}</div>
        <ul className="">
      {
          (restaurant[5]?.card?.card?.itemCards).map(
            (items,index)=>(
             // (() => { console.log(items); })()
                <li key={items.id}

                > { items && items?.card?.info?.name}  --- 
                     <button className="p-2 m-5 bg-green-200" onClick={()=>addFoodItem(items)} > + Add to Cart</button>    
        
                 </li>
                 
              )
             ) 
           
           
        }
      
        </ul>
     
      </div>
     
    </div>
  );
};

export default RestaurantMenu;
