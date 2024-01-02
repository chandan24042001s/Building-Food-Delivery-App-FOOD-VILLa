
import user from "../Images/user.jpeg";
import { useDispatch } from "react-redux";

import { useState } from "react";
import { swiggyIMageCDN } from "../../constant";
import  { addItem, clearCart, removeItem } from "../utils/cartSlice";
addItem
const MenuCard = (props) => {
  const { dishData } = props;
  const { name, price, description, imageId, defaultPrice } =
    dishData?.card?.info;
  const [itemCount, setItemCount] = useState(0);

  const imageSource = imageId === undefined ? user :swiggyIMageCDN + imageId;

  const dispatch = useDispatch();

  const handleClick = (item) => {
    // Dispatch an action
    setItemCount(itemCount + 1);
    dispatch(addItem(item));
  };


  const removeItemClick = (item) => {
    if (itemCount === 0) {
      return;
    }

    setItemCount(itemCount - 1);
    dispatch(removeItem(item));
  };

  return (
    <div id="menu-card">
      <div id="menu-card-left">
        <h3>{name}</h3>
        <h4>₹{price / 100 || defaultPrice / 100}</h4>
        <p>{description}</p>
      </div>

      <div id="menu-card-right">
        <img src={imageSource} alt="" />
        <div>
          <button onClick={() => removeItemClick(dishData)}>-</button>
          {itemCount === 0 ? "ADD" : itemCount}
          <button onClick={() => handleClick(dishData)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;