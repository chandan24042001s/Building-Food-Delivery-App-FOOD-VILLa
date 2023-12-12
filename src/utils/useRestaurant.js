import { useState, useEffect } from "react";
const useRestaurant=()=>{
    const [restaurant, setRestaurant] = useState({});
    const [restaurantBasic, setRestaurantBasic] = useState({});
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      //const itemCards = restaurant?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    
      async function getRestaurantInfo() {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.591945&lng=73.73897649999999&restaurantId=229"
        );
        const json = await data.json();
        //console.log(json.data.cards[0]?.card?.card?.info);
      console.log(json.data);
    
        //setRestaurant(json.data.cards[0]?.card?.card?.info);
        setRestaurant(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
       
      }
      console.log(restaurant)
      return restaurant;
}

export default useRestaurant;