import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggyIMageCDN } from "../../constant";
// import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
// import { CDN_URL } from "../utils/constants";
// import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [veg, setVeg] = useState(false);
  const [vegStyle, setVegStyle] = useState({
    left: "5%",
    backgroundColor: "#fff",
  });
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(id);

  const dummy = "Dummy Data";


 
  const [cardItems, setCardItems] = useState({});
  const dispatch=useDispatch();

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, locality, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const categoryFiltered =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
    return (
      <div id="menu">
        <div id="menu-top">
          <img src={swiggyIMageCDN + cloudinaryImageId} alt="" />
          <h1>{name}</h1>
          <h3>{cuisines?.join(", ")}</h3>
          <h3>{locality}</h3>
        </div>
  
        <div id="menu-bottom">
          <div id="veg-only-button">
            <div id="slider">
              <div
                onClick={() => {
                  if (veg == false) {
                    setVeg(true);
                    setVegStyle({
                      right: "5%",
                      backgroundColor: "green",
                    });
                  } else {
                    setVeg(false);
                    setVegStyle({
                      left: "5%",
                      backgroundColor: "#fff",
                    });
                  }
                }}
                id="circle"
                style={vegStyle}
              ></div>
            </div>
            <h3>Veg Only</h3>
          </div>
  
          <ul id="accordian">
            {categoryFiltered?.map((c, index) => {
              return (
                // Controlled Component
                <RestaurantCategory
                  key={c?.card?.card?.title}
                  vegOption={veg}
                  resData={c?.card?.card}
                  showItems={index === showIndex && true}
                  setMyIndex={() => {
                    index === showIndex
                      ? setShowIndex(null)
                      : setShowIndex(index);
                  }}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );  
  
  
  
  
  
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
};

export default RestaurantMenu;
