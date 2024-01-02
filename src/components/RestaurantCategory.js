import { useState } from "react";
import MenuCard from "./MenuCard";

const RestaurantCategory = (props) => {
  const { vegOption, resData, showItems, setMyIndex } = props;
  const { title, itemCards } = resData;

  const filteredVegItems = itemCards?.filter((dish) => {
    if (vegOption == true) {
      return dish?.card?.info?.itemAttribute.vegClassifier === "VEG";
    } else {
      return dish;
    }
  });

  if (filteredVegItems.length === 0) {
    return;
  }

  const handleClick = () => {
    setMyIndex();
  };

  return (
    <li>
      <label htmlFor={title} onClick={handleClick}>
        {title}
        <span>
          <i className="ri-arrow-down-s-line"></i>
        </span>
      </label>
      <div className="content">
        {showItems &&
          filteredVegItems?.map((dish) => {
            return <MenuCard key={dish?.card?.info?.id} dishData={dish} />;
          })}
      </div>
    </li>
  );
};

export default RestaurantCategory;