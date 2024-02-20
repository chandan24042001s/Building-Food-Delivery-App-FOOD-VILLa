import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { swiggyIMageCDN,swiggy_menu_api_URL, RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY } from "../../constant";
import ShimmerRes from "./ShimmerRes";
import useResMenuData from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );
console.log(restaurant)
  // const isOnline = useOnline();
  
  // if user is not Online then return UserOffline component
  // if(!isOnline){
  //   return <UserOffline />
  // }

  return !restaurant ? (
    <ShimmerRes />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={swiggyIMageCDN + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{menuItems.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={swiggyIMageCDN + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
  
  
  
  
  
    // const addFoodItem=(items)=>{
  //   dispatch(addItem(items));
  // }
  // const restaurant=useRestaurant();
  // console.log(restaurant)
  //const basicInfo = restaurant?.cards[0]?.card?.card?.info;
  //const itemCards = cardItems?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  

  // return (
  //   <div className="menu">
  //       <h1> Restaurant Id: {id} </h1>
        
  //     <div>
  //       </div>
  //   {restaurant && restaurant.length===0 && <Shimmer/>}
  //   <h1>MENU</h1>
  //     <div className="flex justify-center">
  //       <div> { " "}</div>
  //       <ul className="">
  //     {
  //         (restaurant[5]?.card?.card?.itemCards).map(
  //           (items,index)=>(
  //            // (() => { console.log(items); })()
  //               <li key={items.id}

  //               > { items && items?.card?.info?.name}  --- 
  //                    <button className="p-2 m-5 bg-green-200" onClick={()=>addFoodItem(items)} > + Add to Cart</button>    
        
  //                </li>
                 
  //             )
  //            ) 
           
           
  //       }
      
  //       </ul>
     
  //     </div>
     
  //   </div>
  // );


export default RestaurantMenu;
